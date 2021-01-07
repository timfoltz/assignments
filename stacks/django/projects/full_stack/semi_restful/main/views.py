from django.shortcuts import render, HttpResponse, redirect
from.models import Show
from django.contrib import messages

def root(request):
    return redirect('/shows')

def shows(request):
    
    context = {
        "shows_model" : Show.objects.all()
    }
    return render(request, "shows.html", context)

def show_info(request, num):
    context ={
        "show_model" : Show.objects.get(id=num)
    }
    return render(request, "Show_info.html", context)

def edit(request, num):
    context = {
        "show_model" : Show.objects.get(id=num)
    }
    
    return render(request, "edit.html", context)

def delete(request, num):
    this_show = Show.objects.get(id=num)
    this_show.delete()
    return redirect('/')

def add_new(request):
    return render(request, "add_new.html")

def process_new(request):
    # if request.POST.get('title') and request.POST.get('network') and request.POST.get('release_date') and request.POST.get('description') :

        errors =  Show.objects.show_validator(request.POST)
        if len(errors) > 0:
            for msg in errors.values():
                messages.error(request, msg)
            return redirect("/add_new")


        Show.objects.create(
            title=request.POST.get('title'),
            network=request.POST.get('network'),
            release_date=request.POST.get('release_date'),
            desc= request.POST.get('description')
            )

        return redirect("/")
    # else:
    #     return redirect('/error')
            

def process_update(request, num):
    this_show = Show.objects.get(id=num)
    errors =  Show.objects.show_validator(request.POST)
    if len(errors) > 0:
        for msg in errors.values():
            messages.error(request, msg)
        return redirect(f"/edit/{num}")

    else:
        this_show.title = request.POST.get('title')
        this_show.network = request.POST.get('network')
        this_show.release_date = request.POST.get('release_date')
        this_show.desc = request.POST.get('description')
        this_show.save()

    return redirect(f"/show_info/{num}")

            


def error(request):
    return HttpResponse('Please try again')

# Create your views here.
