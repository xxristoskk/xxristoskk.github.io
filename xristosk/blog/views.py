from django.views import generic
from .models import Post

class PostList(generic.ListView):
    model = Post
    # queryset = Post.objects.filter(status=1).order_by('-created_on')
    template_name = 'index.html'

class PostDetail(generic.DetailView):
    model = Post
    template_name = 'blog_detail.html'

class AddBlog(generic.CreateView):
    model = Post
    template_name = 'add_blog.html'

    fields = ['title','author', 'body','status']