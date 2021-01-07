from django.shortcuts import render, HttpResponse, redirect
from .models import User, Message, Comment
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
    return redirect('/success')



def login(request):
    users_with_email = User.objects.filter(email = request.POST['email'])
    if len(users_with_email) > 0:
        first_user = users_with_email[0]
        if bcrypt.checkpw(request.POST['password'].encode(), first_user.password.encode()):
            request.session['user_id'] = first_user.id
            return redirect('/wall')
    messages.error(request, "Email or password incorrect!")
    return redirect('/')

def success(request):
    if request.session['user_id']:
        context ={
            'user' : User.objects.get(id=request.session['user_id'])
        }
        return render(request, 'success.html', context)
    messages.error(request, "You must log in or register")
    return redirect('/')

def logout(request):
    request.session['user_id'] = None
    messages.error(request, "You have been logged out!")
    return redirect('/')

def delete(request, num):
    this_user = User.objects.get(id=num)
    this_user.delete()
    return redirect('/checkDB')

def wall(request):
    if request.session['user_id']:

        context = {
            'user' : User.objects.get(id=request.session['user_id']),
            'messages' : Message.objects.all(),
            'comments' :Comment.objects.all()
        }
        print(request.session['user_id'])
        return render(request, 'wall.html', context)
    messages.error(request, "You must be logged in to see this content")
    return redirect('/')

def post_message(request):

    Message.objects.create(
        wall_post = request.POST.get('wall_post'),
        writer = User.objects.get(id = request.session['user_id'])
    )
    return redirect('/wall')

def post_comment(request):

    Comment.objects.create(
        comment_post = request.POST.get('post_comment'),
        writer = User.objects.get(id = request.session['user_id']),
        message = Message.objects.get(id = request.POST.get('message_id'))
    )
    return redirect('/wall')


def checkDB(request):
    context = {
        'users_db' : User.objects.all(),
    }
    return render(request, 'db.html', context)