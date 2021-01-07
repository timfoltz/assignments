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


class TripManager(models.Manager):
    def trip_validator(self, post_data):
        errors = {}
        if post_data['destination'] and post_data['start_date'] and post_data['end_date'] and post_data['plan']:
            if len(post_data['destination']) < 3:
                errors['destination_error'] = "Destination must be at least 3 characters!"
            if len(post_data['plan']) < 3:
                errors['plan_error'] = "Plan must be at least 3 characters!"
            if date.fromisoformat(post_data['start_date']) < date.today():
                errors['start_date_error'] = "The start date must be in the future!"
            if date.fromisoformat(post_data['end_date']) < date.fromisoformat(post_data['start_date']):
                errors['end_date_error'] = "The end date must be later than the start date! We don't have a DeLorean McFly!"
            
            return errors

        else:
            errors['post_error'] = "Please complete all fields"
        return errors


class Trip(models.Model):
    destination = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    plan = models.TextField()
    travelers = models.ManyToManyField(User, related_name="trips")
    created_by = models.ForeignKey(User, related_name="trips_created", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = TripManager()
