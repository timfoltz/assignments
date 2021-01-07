from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('reset', views.reset),
    # path('farming', views.farming),
    # path('cave', views.cave),
    # path('house', views.house),
    # path('casino', views.casino),
    path('process_money', views.process_money),


]
