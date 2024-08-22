from django.db import models

# Create your models here.
# class name starts with capital
#  max length will be 36 

class Movie(models.Model):
    movie_title= models.CharField(max_length=36,unique=True)
    isRentable = models.BooleanField(default=False)
    isHD = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=6, decimal_places=2)

# to maintain on how to see the movie in the admin page. 
    def __str__(self):
        return self.movie_title