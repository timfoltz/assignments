from django.shortcuts import render, HttpResponse, redirect
from .models import User, Trip
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, 'index.html')

def register(request):
    errors =  User.objects.user_validator(request.POST)
    if len(errors) > 0:
        for msg in errors.values():
            messages.error(request, msg)
        return redirect("/")
    password =request.POST['password']
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()


    new_user = User.objects.create(
        fname=request.POST.get('fname'),
        lname=request.POST.get('lname'),
        email=request.POST.get('email'),
        password=hashed,
    )
    request.session['user_id'] = new_user.id
    return redirect('/dashboard')



def login(request):
    users_with_email = User.objects.filter(email = request.POST['email'])
    if len(users_with_email) > 0:
        first_user = users_with_email[0]
        if bcrypt.checkpw(request.POST['password'].encode(), first_user.password.encode()):
            request.session['user_id'] = first_user.id
            return redirect('/dashboard')
    messages.error(request, "Email or password incorrect!")
    return redirect('/')

def dashboard(request):
    if request.session['user_id']:
        other_trips = []
        open_trips = []
        available_trips = []
        all_trips = Trip.objects.all()
        this_user = User.objects.get(id=request.session['user_id'])
        for traveler in all_trips:
            if traveler in this_user.trips.all():
                other_trips.append(traveler)
        for trips in all_trips:
            if trips not in other_trips:
                open_trips.append(trips)
        for trips in open_trips:
            if trips not in this_user.trips.all():
                available_trips.append(trips)
        user_trips =this_user.trips_created.all().order_by('-created_at')

        context = {
            'user' : User.objects.get(id=request.session['user_id']),
            'user_trips' : this_user.trips_created.all().order_by('-created_at'),
            'trips' : Trip.objects.all().order_by('-created_at'),
            'other_trips' : other_trips,
            'open_trips' : open_trips
        }
        print(other_trips)
        print('*******', all_trips)
        print('#########', open_trips)
        print('&&&&&&&&&&&&', available_trips)
        return render(request, 'dashboard.html', context)
    messages.error(request, "You must be logged in to see this content")
    return redirect('/')

def add_new_trip(request):
    context = {
            'user' : User.objects.get(id=request.session['user_id']),
        }
    return render(request, "add_new_trip.html", context)

def process_new_trip(request):
        errors =  Trip.objects.trip_validator(request.POST)
        if len(errors) > 0:
            for msg in errors.values():
                messages.error(request, msg)
            return redirect("/add_new_trip")

        this_user = User.objects.get(id=request.session['user_id'])
        Trip.objects.create(
            destination=request.POST.get('destination'),
            start_date=request.POST.get('start_date'),
            end_date=request.POST.get('end_date'),
            plan= request.POST.get('plan'),
            created_by= this_user

            )

        return redirect("/dashboard")



def view_trip(request, trip_id):
    this_user = User.objects.get(id=request.session['user_id'])
    user_trips =this_user.trips_created.all().order_by('-created_at')
    this_trip = Trip.objects.get(id=trip_id)
    all_users = User.objects.all()
    users_this_trip = []
    for users in this_trip.travelers.all():
        if users not in all_users:
            users_this_trip.append(users)
    print(users_this_trip)
    context = {
        'user' : this_user,
        'trip' : this_trip,
        


    }
    print(this_trip.travelers.all,"*******************")
    return render(request, 'trips.html', context)

def edit_trip(request, trip_id):
    this_user = User.objects.get(id=request.session['user_id'])
    this_trip = Trip.objects.get(id=trip_id)
    print("****************",this_trip.start_date)
    context = {
        'user' : this_user,
        'trip' : this_trip,

    }
    return render(request, 'edit_trip.html', context)

def process_edit_trip(request, trip_id):
        errors =  Trip.objects.trip_validator(request.POST)
        if len(errors) > 0:
            for msg in errors.values():
                messages.error(request, msg)
            return redirect(f"/edit_trip/{trip_id}")

        this_user = User.objects.get(id=request.session['user_id'])
        this_trip = Trip.objects.get(id=trip_id)

        this_trip.destination=request.POST.get('destination')
        this_trip.start_date=request.POST.get('start_date')
        this_trip.end_date=request.POST.get('end_date')
        this_trip.plan= request.POST.get('plan')
        this_trip.save()

            

        return redirect("/dashboard")

def join_trip(request, trip_id):
    this_user = User.objects.get(id=request.session['user_id'])
    trip = Trip.objects.get(id=trip_id)
    trip.travelers.add(this_user)
    return redirect('/dashboard')

def leave_trip(request, trip_id):
    this_user = User.objects.get(id=request.session['user_id'])
    trip = Trip.objects.get(id=trip_id)
    trip.travelers.remove(this_user)
    return redirect('/dashboard')









def cancel(request):
    messages.error(request, "You canceled making your trip or editing a trip")
    return redirect('/dashboard')

def logout(request):
    request.session['user_id'] = None
    messages.error(request, "You have been logged out!")
    return redirect('/')

def delete(request, trip_id):
    this_trip = Trip.objects.get(id=trip_id)
    this_trip.delete()
    return redirect('/dashboard')

def checkDB(request):
    context = {
        'users_db' : User.objects.all(),
    }
    return render(request, 'db.html', context)

