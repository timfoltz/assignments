from django.shortcuts import render, HttpResponse, redirect
import random, datetime

def index(request):
    t=datetime.datetime.now()
    num_visits = request.session.get('num_visits')
    if num_visits == None:
        request.session['gold_stash'] = 0
        request.session['activities_log'] = "Have Fun!"
        request.session['num_visits'] = 1
        my_gold = request.session['gold_stash']
        activities = request.session['activities_log'].split("!")
        pass_through = {
            'gold_stash' : my_gold,
            'activities_log' : activities,
        }
        return render(request, "index.html", pass_through)
    
    else:
        my_gold = request.session.get('gold_stash')
        activities = request.session['activities_log'].split("!")
        pass_through = {
            'gold_stash' : my_gold,
            'activities_log' : activities,
        }
        return render(request,"index.html", pass_through)

##############################################


def reset(request):
        request.session['num_visits'] = None
        return redirect("/")


def process_money(request):
    t=datetime.datetime.now()

    if request.POST['location'] == "casino":
        gold_found = random.randint(-50, 50)
        if gold_found >=0:
            request.session['activities_log'] = f"You WON {gold_found} at the casino! {t}" + request.session['activities_log'] 
        if gold_found < 0:
            request.session['activities_log'] = f"You LOST {gold_found} at the casino! {t}" + request.session['activities_log'] 
    if request.POST['location'] == "farm":
        gold_found = random.randint(10, 20)
        request.session['activities_log'] = f"Your FARM produced {gold_found} gold{t}!" + request.session['activities_log'] 


    if request.POST['location'] == "house":
        gold_found = random.randint(2, 5)
        request.session['activities_log'] = f"Found {gold_found} under the couch in the House! {t}" + request.session['activities_log'] 


    if request.POST['location'] == "cave":
        gold_found = random.randint(5, 10)
        request.session['activities_log'] = f"Found {gold_found} gold in Cave {t}!" + request.session['activities_log'] 

    request.session['gold_stash'] = request.session['gold_stash'] + gold_found
    my_gold = request.session.get('gold_stash')

    activities = request.session.get('activities_log')

    return redirect("/")