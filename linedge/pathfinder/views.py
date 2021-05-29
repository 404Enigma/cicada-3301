from django.http import HttpResponse,request
from django.shortcuts import render,redirect


def home(request):
    return render(request,"home.html",{})


def main(request):
    return render(request,"main.html",{})