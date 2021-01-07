from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('authors', views.authors),
    path('books', views.books),
    path('error', views.error),
    path('book/<int:num>', views.book),
    path('author/<int:num>', views.author),
    path('newbook', views.newbook),
    path('newauth', views.newauth),
    path('add_book', views.addbook),
    path('add_auth', views.addauth)

]
