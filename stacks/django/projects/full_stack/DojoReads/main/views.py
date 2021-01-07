from django.shortcuts import render, HttpResponse, redirect
from .models import User, Author, Book, Review
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


def logout(request):
    request.session.clear()
    messages.error(request, "You have been logged out!")
    return redirect('/')


def dashboard(request):
    if request.session['user_id']:

        context = {
            'user' : User.objects.get(id=request.session['user_id']),
        }
        return render(request, 'dashboard.html', context)
    messages.error(request, "You must be logged in to see this content")
    return redirect('/')

def add_new(request):
    print(request.session['user_id'])
    return render(request, 'add_new.html')

def add_book(request):
    this_user = User.objects.get(id=request.session['user_id'])
    author = Author.objects.create(
        fname = request.POST.get('fname'),
        lname = request.POST.get('lname')
    )
    book = Book.objects.create(
        title = request.POST.get('title'),
        author = author,
        added_by = this_user
    )
    Review.objects.create(
        content = request.POST.get('review'),
        reviewer = this_user,
        book = book,
        scale = request.POST.get('rating'),
    )
    return redirect(f'/books/{book.id}')

def books(request, book_id):
    context = {
        "book" : Book.objects.get(id=book_id)
    }
    return render(request, 'books.html', context)

def add_review(request):
    this_user = User.objects.get(id=request.session['user_id'])
    book = Book.objects.get(id= int(request.POST.get('book'))) 
    Review.objects.create(
        content = request.POST.get('review'),
        reviewer = this_user,
        book = book,
        scale = request.POST.get('rating'),
    )
    return redirect(f'/books/{book.id}')

def delete_review(request, review_id):

    this_review = Review.objects.get(id=review_id)
    this_user = User.objects.get(id=request.session['user_id'])
    if this_review.reviewer.id == this_user.id:
        this_review.delete()
    return redirect('/user')

def users_page(request, user_id):
    this_user = User.objects.get(id=user_id)
    context = {
        'user' : this_user,
    }
    return render(request, 'user_page.html', context)

def delete(request, num):
    this_user = Book.objects.get(id=num)
    this_user.delete()
    return redirect('/checkDB')


def checkDB(request):
    context = {
        'users_db' : User.objects.all(),
        'all_books' : Book.objects.all(),
        'all_reviews' : Review.objects.all()
    }
    return render(request, 'db.html', context)

def success(request):
    if request.session['user_id']:
        context ={
            'user' : User.objects.get(id=request.session['user_id'])
        }
        return render(request, 'success.html', context)
    messages.error(request, "You must log in or register")
    return redirect('/')

