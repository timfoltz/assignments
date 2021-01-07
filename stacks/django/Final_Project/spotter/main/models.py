from django.db import models
from datetime import date, datetime
import re

class UserManager(models.Manager):
    def user_validator(self, post_data):
        errors = {}
        if len(post_data['fname']) < 2:
            errors['first_name'] = "First name should be at least 2 characters"
        if len(post_data['lname']) < 2: 
            errors['last_name'] = "Last name should be at least 2 characters"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Invalid email address!"
        if post_data['uname'] in User.objects.all():
            errors['uname_error'] = "This username is already taken!"
        if len(post_data['password']) < 8:
            errors['passwords'] = "password should be at least 8 characters"
        if post_data['confirm_password'] != post_data['password']:
            errors['confirm_password'] = "passwords must match"
        return errors

class User(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)
    user_name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    skill = models.CharField(default='beginner', max_length=50)
    bio = models.TextField(blank=True)
    photo = models.URLField(default="https://i.pinimg.com/originals/1b/59/c8/1b59c809d30e78e05a5f1794b33100c8.jpg")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()



class GymManager(models.Manager):
    def gym_validator(self, post_data):
        errors = {}
        if len(post_data['name']) < 2:
            errors['name_error'] = "Name should be at least 2 characters"
        if len(post_data['location']) < 2:
            errors['location_error'] = "Location should be at least 2 characters"
        if len(post_data['about']) < 10:
            errors['about_error'] = "Name should be at least 2 characters"
        return errors

class Gym(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    members = models.ManyToManyField(User, related_name="gyms")
    about = models.TextField()
    photo = models.URLField(default="https://i.pinimg.com/originals/1b/59/c8/1b59c809d30e78e05a5f1794b33100c8.jpg")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = GymManager()


class Spotter(models.Model):
    user_name = models.ManyToManyField(User, related_name="spotters")
    muscle_group = models.CharField(max_length = 50)
    skill = models.CharField(default='beginner', max_length=50)
    gym = models.ForeignKey(Gym, related_name="visitors", on_delete=models.CASCADE)
    about = models.TextField(default='my workout')
    workout_date = models.DateField()
    created_by = models.ForeignKey(User, related_name="sessions", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Workout(models.Model):
    name = models.CharField(max_length=50)
    muscle_group = models.CharField(max_length=50)
    about = models.TextField()
    created_by = models.ForeignKey(User, related_name="workouts", on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(User, related_name="liked_workouts")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Journal(models.Model):
    user = models.ForeignKey(User, related_name='journals', on_delete=models.CASCADE)
    workout_date = models.DateField()
    description = models.TextField()


# Review
# 
# 
# Trainer
# 
# 
# Message