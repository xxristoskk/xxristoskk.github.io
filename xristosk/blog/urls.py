from . import views
from django.urls import path

urlpatterns = [
    path('', views.PostList.as_view(), name='blog'),
    path('<int:pk>/', views.PostDetail.as_view(), name='blog_detail'),
    path('post/', views.AddBlog.as_view(), name='add_blog')
]