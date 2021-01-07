from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('success', views.success),
    path('logout', views.logout),
    path('dashboard', views.dashboard),
    path('add_new', views.add_new),
    path('add_book', views.add_book),
    path('add_review', views.add_review),
    path('delete_review/<int:review_id>', views.delete_review),
    path('books/<int:book_id>', views.books),
    path('users/<int:user_id>', views.users_page),
    path('checkDB', views.checkDB),
    path('delete/<int:num>', views.delete),
]