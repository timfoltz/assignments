from django.shortcuts import render, HttpResponse, redirect

def shows(request):
    return render(request, "shows.html")

def show_info(request):
    return render(request, "Show_info.html")

def edit(request):
    return render(request, "edit.html")

def add_new(request):
    return render(request, "add_new.html")

def process_new(request):
    if request.method == 'POST':
        if request.POST.get('title') and request.POST.get('network') and request.POST.get('release_date') and request.POST.get('description') :
            title = request.POST.get('title')
            network = request.POST.get('network')
            release_date = request.POST.get('release_date')
            description = request.POST.get('description')
            Show.objects.create(title=title, network=network, release_date=release_date, description= description)
            return redirect("/")
        else:
            return redirect('/error')
    else:
        return redirect('/error')
            
    return render(request, "show_info.html")

def process_update(request):
    return render(request, "show_info.html")

def error(request):
    return HttpResponse('Please try again')

# Create your views here.
