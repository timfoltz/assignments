from django.urls import path
from . import views

urlpatterns = [
    path('', views.shows),
    path('show_info', views.show_info),
    path('edit', views.edit),
    path('add_new', views.add_new),
    path('process_new', views.process_new),
    path('process_update', views.process_update),

]