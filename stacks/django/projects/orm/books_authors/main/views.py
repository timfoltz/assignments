from django.shortcuts import render, HttpResponse, redirect
from .models import Book, Author

def index(request):
    context = {
        "book_model":Book.objects.all()
    }
    return render(request, 'index.html', context)

def authors(request):
    context = {
        "author_model":Author.objects.all()
    }
    return render(request, 'authors.html', context)

def author(request, num):
    context = {
        "author_model":Author.objects.get(id=num),
        "authors" : Author.objects.all(),
        "book_model" : Book.objects.all()
    }
    print(context)
    return render(request, 'view_auth.html', context)

def books(request):
    context = {
        "book_model":Book.objects.all()
    }
    return render(request, 'books.html', context)

def book(request, num):
    context = {
        "book_model":Book.objects.get(id=num),
        "author_model" : Author.objects.exclude(book= (book.objects.get(id=num)))

    }
    return render(request, 'books.html', context)

def error(request):
    return HttpResponse("Please try again")

def newbook(request):
    if request.method == 'POST':
        if request.POST.get('book_title'):
            title = request.POST.get('book_title')
            desc = request.POST.get('book_desc')
            Book.objects.create(title=title, desc=desc)
            context = {
                "book_model":Book.objects.all()
            }
            return redirect("/")
        else:
            return redirect('/error')
    else:
        return redirect('/error')

def newauth(request):
    if request.method == 'POST':
        if request.POST.get('author_fname') and request.POST.get('author_lname') :
            fname = request.POST.get('author_fname')
            lname = request.POST.get('author_lname')
            notes = request.POST.get('author_notes')
            Author.objects.create(fname=fname, lname=lname, notes=notes)
            context = {
                "author_model":Author.objects.all()
            }
            return redirect("/authors")
        else:
            return redirect('/error')
    else:
        return redirect('/error')

def addbook(request):
    if request.method == 'POST':
        this_book = Book.objects.get(id = request.POST.get('add_auth'))
        this_author = Author.objects.get(id = request.POST.get('auth_id'))
        this_author.book.add(this_book)
        num = request.POST.get('auth_id')
        return redirect(f"/author/{num}")
    else:
        return redirect('/error')

def addauth(request):
    if request.method == 'POST':
        this_author = Author.objects.get(id = request.POST.get('add_book'))
        this_book = Book.objects.get(id = request.POST.get('book_id'))
        this_book.authors.add(this_author)
        num = request.POST.get('book_id')
        return redirect(f"/book/{num}")
    else:
        return redirect('/error')