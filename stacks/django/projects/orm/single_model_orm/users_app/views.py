from django.shortcuts import render, HttpResponse, redirect
from .models import user

def index(request):
    context = {
        "user_model": user.objects.all()
    }
    
    return render(request,"index.html",context)

def process(request):
    if request.method =='POST':
        if request.POST.get('first_name') and request.POST.get('last_name'):
            # user = user()
            first = request.POST.get('first_name')
            last = request.POST.get('last_name')
            email = request.POST.get('email_address')
            age = request.POST.get('age')
            user.objects.create(first_name= first, last_name = last, email_address = email, age = age)
            print(request.POST)
            return redirect("/")
        else:
            return redirect("/tryagain")

def tryagain(request):
    return render(request, "success.html")
