from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name='index'),
    path('forum/', views.forum, name='forum'),
    path('magazin/', views.shop, name='magazin'),
    path('voteaza/', views.vote, name='vot'),
    path('inregistrare/', views.register, name="inregistrare"),
    path('autentificare/', auth_views.LoginView.as_view(template_name='signin.html'), name="autentificare"),
    path('delogare/', auth_views.LogoutView.as_view(template_name='logout.html'), name='delogare'),
    path('forum/trimitere-email/', views.sendMail, name="sendEmail"),
    path('forum/resetare-parola/', views.passwordReset, name="passwordReset"),
    path('forum/<str:subtopic>', views.requestTopic, name='subTopic'),
    path('404/', views.error404, name='error'),
]