from rest_framework import serializers
from .MovieModel import Movie


class MovieSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Movie
        fields = ['movie_title','isRentable','isHD','price']