from django.db import models
from datetime import date, datetime
import re

class UserManager(models.Manager):
    def user_validator(self, post_data):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        errors = {}
        if post_data['fname'] and post_data['lname'] and post_data['email'] and post_data['password']:
            if len(post_data['fname']) < 2:
                errors['fname_error'] = "First Name must be at least 2 characters!"
            if len(post_data['lname']) < 2:
                errors['lname_error'] = "Last Name must be at least 2 characters!"
            # if date.fromisoformat(post_data['birthday']) > date.today():
            #     errors['birthday_error'] = "Your Birthday must be in the past!" 
            if not EMAIL_REGEX.match(post_data['email']):            
                errors['email_error'] = "Invalid email address!"
            if len(post_data['password']) < 8:
                errors['password_error'] = "Password must be at least 8 characters!"
            if post_data['password'] != post_data['confirm']:
                errors['confirm_error'] = "Passwords must match!"
            
            return errors

        else:
            errors['post_error'] = "Please complete all fields"
        return errors

class User(models.Model):
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    email = models.EmailField()
    password= models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Author (models.Model):
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book (models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name="books_written", on_delete=models.CASCADE)
    added_by = models.ForeignKey(User, related_name="books_added", on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(User, related_name="liked_books")
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class Review(models.Model):
    content = models.TextField()
    reviewer = models.ForeignKey(User, related_name="reviews_written", on_delete=models.CASCADE,)
    book = models.ForeignKey(Book, related_name="reviews", on_delete=models.CASCADE)
    scale = models.IntegerField(default=1)
    liked_by = models.ManyToManyField(User, related_name="liked_reviews")
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)
