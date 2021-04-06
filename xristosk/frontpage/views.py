from django.shortcuts import render

# Create your views here.
def home(request):
    context={}
    return render(request, 'home.html', context)

def datasets(request):
    return render(request, 'datasets.html', context={})

def projects(request):
    return render(request, 'projects.html', context={})