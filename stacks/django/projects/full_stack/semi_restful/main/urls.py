from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('shows', views.shows),
    path('show_info/<int:num>', views.show_info),
    path('edit/<int:num>', views.edit),
    path('add_new', views.add_new),
    path('process_new', views.process_new),
    path('process_update/<int:num>', views.process_update),
    path('delete/<int:num>', views.delete),
    path('error', views.error),

    

]