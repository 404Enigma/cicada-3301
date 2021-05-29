from django.urls import path
from . import views #linedge\pathfinder\views.py



urlpatterns = [
    
    path("",views.home,name="home"),
    path("main/",views.main,name="main"),
    
]