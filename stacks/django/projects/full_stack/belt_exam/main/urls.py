
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('dashboard', views.dashboard),
    path('add_new_trip', views.add_new_trip),
    path('process_new_trip', views.process_new_trip),
    path('cancel', views.cancel),
    path('view_trip/<int:trip_id>', views.view_trip),
    path('edit_trip/<int:trip_id>', views.edit_trip),
    path('join_trip/<int:trip_id>', views.join_trip),
    path('leave_trip/<int:trip_id>', views.leave_trip),
    path('process_edit_trip/<int:trip_id>', views.process_edit_trip),





    path('checkDB', views.checkDB),
    path('delete/<int:trip_id>', views.delete),
]
