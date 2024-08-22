from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import viewsets, status
# from django.http import HttpResponse
# from django.views import View
from .MovieModel import Movie
from rest_framework import viewsets
# do inheritance of View : so we get all the function of View class
from .MovieSerializer import MovieSerializer
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError


class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie .objects.all()
   
    @action(detail=False, methods=['POST'])
    def add_movie(self, request, pk=None):
        try:
        # Extract data from the request
            movieTitle = request.data.get('movie_title')
            isRentable = request.data.get('isRentable')
            isHD = request.data.get('isHD')
            price = request.data.get('price')

            # Creating the Movie instance
            movie = Movie.objects.create(
                movieTitle=movieTitle,
                isRentable=isRentable,
                isHD=isHD,
                price=price
            )

            # Serialize the newly created movie
            serializer = MovieSerializer(movie)

            # Create a response with a success message and the serialized data
            response = {'message': 'Movie Created', 'result': serializer.data}
            return Response(response, status=status.HTTP_201_CREATED)
        
        except ValidationError as e:
            # Return a response with validation errors
            response = {'message': 'Validation Error', 'errors': str(e)}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            # Handle any other exception that might occur
            response = {'message': 'An error occurred', 'error': str(e)}
            return Response(response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)