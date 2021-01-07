from django.shortcuts import render, HttpResponse, redirect
from .models import User, Spotter, Gym, Workout, Journal
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, 'login.html')

def login(request):
    users_with_email = User.objects.filter(email=request.POST['email'])
    if len(users_with_email) > 0:
        first_user = users_with_email[0]
        if bcrypt.checkpw(request.POST['password'].encode(), first_user.password.encode()):
            request.session['user_id'] = first_user.id
            return redirect(f'/user_profile/{first_user.id}')
    messages.error(request, "Email invalid or password is wrong!")
    return redirect('/')

def logout(request):
    request.session.flush()
    return redirect('/')


def user_profile(request, user_id):
    my_workout = Workout.objects.filter(created_by=request.session['user_id'])
    this_user = User.objects.get(id=user_id)
    context = {
        'user' : User.objects.get(id= user_id),
        'gym' : Gym.objects.all(),
        'workout' : Workout.objects.exclude(created_by=request.session['user_id']),
        'my_workout' : my_workout
    }
    return render(request, 'user_profile.html', context)

def process_user_edit(request, user_id):
    this_user = User.objects.get(id=user_id)
    fname_from_form=request.POST['fname']
    lname_from_form=request.POST['lname']
    skill_from_form=request.POST['skill']
    location_from_form=request.POST['location']
    bio_from_form=request.POST['bio']
    photo_url = request.POST['photo']
    
    
    
    this_user.fname=fname_from_form
    this_user.lname=lname_from_form
    this_user.skill = skill_from_form
    this_user.location=location_from_form
    this_user.bio=bio_from_form
    this_user.photo = photo_url
    this_user.save()
    
    return redirect(f'/user_profile/{user_id}')


def dashboard(request):
    if request.session['user_id']:

        context = {
            "user" : User.objects.get(id=request.session['user_id'])
        }
        print(request.session['user_id'])
    return render(request,'dashboard.html', context)


def register_new_user(request):
    errors = User.objects.user_validator(request.POST)
    if len(errors) > 0:
        for msg in errors.values():
            messages.error(request, msg)
        return redirect('/')

    password = request.POST['password']
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    
    new_user = User.objects.create (
        fname = request.POST['fname'],
        lname = request.POST['lname'],
        email = request.POST['email'],
        password = hashed,
        user_name = request.POST['uname'],
        location = request.POST['location']
        )
    request.session['user_id'] = new_user.id
    return redirect('/dashboard')

def find_gym(request):
    context = {
        'all_gyms' : Gym.objects.all()
    }
    return render(request, 'find_gym.html', context)

def add_gym(request):
    context = {
        'this_user' : User.objects.get(id=request.session['user_id'])
    }
    return render(request,'add_gym.html', context)


def process_add_gym(request):
    errors = Gym.objects.gym_validator(request.POST)
    if len(errors) > 0:
        for msg in errors.values():
            messages.error(request, msg)
        return redirect('/add_gym')
    this_gym = Gym.objects.create(
        name = request.POST['name'],
        location= request.POST['location'],
        about = request.POST['about'],
        photo = request.POST['photo']
    )
    return redirect(f'/gym_info/{this_gym.id}')

def gym_info(request, gym_id):
    this_gym = Gym.objects.get(id=gym_id)
    context = {
        'all_gyms' : Gym.objects.all(),
        'gym' : Gym.objects.get(id=gym_id),
        'user' : User.objects.get(id=request.session['user_id'])
    }

    return render(request, 'gym_info.html', context)


def add_gym_photo(request, gym_id):
    this_gym = Gym.objects.get(id=gym_id)
    this_gym.photo = request.POST["photo"]
    this_gym.save()
    
    return redirect(f'/gym_info/{gym_id}')

# def edit_gym_info(request, gym_id):
#     this_gym = Gym.objects.get(id=gym_id)
#     context = {
#         'this_gym' : Gym.objects.get(id=gym_id),
#         'user' : User.objects.get(id=request.session['user_id'])
#     }

#     return render(request, 'edit_gym_info.html', context)

def process_gym_edit(request, gym_id):
    errors = Gym.objects.gym_validator(request.POST)
    if len(errors) > 0:
        for msg in errors.values():
            messages.error(request, msg)
        return redirect(f'/gym_info/{gym_id}')
    this_gym = Gym.objects.get(id=gym_id)
    this_gym.name = request.POST['name']
    this_gym.location= request.POST['location']
    this_gym.about = request.POST['about']
    this_gym.photo = request.POST['photo']
    this_gym.save()
    return redirect(f'/gym_info/{gym_id}')

def process_workout(request):
    this_user = User.objects.get(id= request.session['user_id'])

    this_workout = Workout.objects.create(
        name = request.POST['name'],
        muscle_group = request.POST['muscle_group'],
        about = request.POST['about'],
        created_by = this_user
    )
    return redirect(f'/user_profile/{this_user.id}')

def post_workout(request):
    pass

def process_spotter(request):
    gym_from_form = Gym.objects.get(id= request.POST['gym'])
    skill_from_form=request.POST['skill']
    muscle_group_from_form=request.POST['muscle_group']
    date_from_form=request.POST['date']
    about_from_form=request.POST['about']
    this_spotter = Spotter.objects.create(
        gym = gym_from_form,
        # location = location_from_form,
        skill = skill_from_form,
        muscle_group= muscle_group_from_form,
        workout_date = date_from_form,
        about = about_from_form,
        created_by = User.objects.get(id=request.session['user_id'])
    )
    return redirect('/spotter')


def spotter(request):
    context = {
        'all_spotters' : Spotter.objects.all(),
        'all_gyms' : Gym.objects.all(),
        'this_spotter' : Spotter.objects.all()
    }
    return render(request,'spotters.html', context)

def join_spotter(request, spotter_id):
    this_spotter = Spotter.objects.get(id=spotter_id)
    this_user = User.objects.get(id=request.session['user_id'])
    this_spotter.user_name.add(this_user)
    return redirect('/spotter')

def join_gym(request, gym_id):
    this_gym = Gym.objects.get(id=gym_id)
    this_user = User.objects.get(id=request.session['user_id'])
    this_gym.members.add(this_user)
    return redirect(f'/user_profile/{this_user.id}')

def leave_gym(request, gym_id):
    this_gym = Gym.objects.get(id=gym_id)
    this_user = User.objects.get(id=request.session['user_id'])
    this_gym.members.remove(this_user)
    return redirect(f'/user_profile/{this_user.id}')

def workout_like(request, workout_id):
    this_workout = Workout.objects.get(id=workout_id)
    this_user = User.objects.get(id=request.session['user_id'])
    this_workout.liked_by.add(this_user)
    return redirect(f'/user_profile/{this_user.id}')

def tracker(request, user_id):
    context = {
        'user':User.objects.get(id=user_id)
    }
    return render(request, 'tracker.html', context)