from django.db import models

# Create your models here.

class Thana(models.Model):
    thananame = models.CharField(max_length=50)
    contact = models.TextField()
    location = models.TextField()