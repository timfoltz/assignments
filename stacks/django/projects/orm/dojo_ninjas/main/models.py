from django.db import models

class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    desc = models.TextField(default="old dojo")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # def __repr__(self):
    #     return f"<User | ID: {self.id} | First: {self.name}>"

class Ninja(models.Model):
    dojo = models.ForeignKey(Dojo, related_name="ninjas", on_delete= models.CASCADE)
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    # def __repr__(self):
        # return f"<User | ID: {self.id} |{self.fname} |{self.lname}  |{self.dojo}>"