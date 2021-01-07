from django.shortcuts import render, HttpResponse, redirect
from .models import Dojo, Ninja

def index(request):
    print(Dojo.objects.all())
    context = {
        "dojo_class": Dojo.objects.all()
    }
    return render(request,"index.html", context)

def dojo(request):
    if request.method == 'POST':
        if request.POST.get('name') and request.POST.get('city') and request.POST.get('state'):
            name = request.POST.get('name')
            city = request.POST.get('city')
            state = request.POST.get('state')
            Dojo.objects.create(name=name, city=city, state=state)
        return redirect("/")
    else:
        return redirect("/tryagain")

def ninja(request):
    if request.method == 'POST':
        if request.POST.get('dojo') and request.POST.get('fname') and request.POST.get('lname'):
            dojo = Dojo.objects.get(id = request.POST.get('dojo'))
            fname = request.POST.get('fname')
            lname = request.POST.get('lname')
            Ninja.objects.create(fname=fname, lname=lname, dojo=dojo)
        return redirect("/")
    else:
        return redirect("/tryagain")

def tryagain(request):
    return render(request, "tryagain.html")

def delete(request):
    print("button worked*************************")
    return redirect("/")





# Create your views here.
