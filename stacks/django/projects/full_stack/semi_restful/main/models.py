from django.db import models
from datetime import date, datetime

class ShowManager(models.Manager):
    def show_validator(self, post_data):
        errors = {}

        if post_data['title'] and post_data['network'] and post_data['release_date']:
            if len(post_data['title']) < 2:
                errors['title_error'] = "Title must be at least 2 characters!"


            # if len(Show.objects.filter(title=post_data['title'])) > 0:
            #     if not Show.created_at:
            #         print("&&&&&&&&&&&&&&&&&&&&&&&")
            #         errors['title_dup'] = "This show is already added"
            if len(post_data['network']) < 3:
                errors['network_error'] = "Network must be at least 3 characters!"
            if date.fromisoformat(post_data['release_date']) > date.today():
                errors['title_error'] = "The release date must be in the past!"
            if len(post_data['description']) >=1:
                if len(post_data['description']) < 10:
                    errors['description_error'] = "Description must be at least 10 characters!"

            return errors

        else:
            errors['post_error'] = "Please complete all fields"
        return errors


class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    desc = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()