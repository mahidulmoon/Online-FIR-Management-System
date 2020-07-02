from django.db import models

# Create your models here.

class Complainerinfo(models.Model):
    name=models.CharField( max_length=50)
    fathername=models.CharField( max_length=50)
    address=models.TextField()
    contact=models.CharField(max_length=15)


class FIR(models.Model):
    complainername = models.CharField(max_length=50)
    victimename = models.CharField(max_length=50)
    age = models.CharField(max_length=5)
    address = models.TextField()
    dateofincedence = models.CharField(max_length=30)
    timeofincedence = models.CharField(max_length=30)
    timeoffirregistration = models.DateTimeField(auto_now_add=True, blank=True)
    complaintype = models.TextField()
    status=models.CharField(max_length=30,default='pending')
    thana = models.TextField()