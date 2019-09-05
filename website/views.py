from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .forms import RegisterForm, LoginForm, SendEmailForm, PasswordResetForm, subTopicForm

def index(request):
    return render(request, 'index.html')
def forum(request):
    grade = subTopicForm
    return render(request, 'forum.html', {'grade' : grade})
def requestTopic(request, subtopic):
    grade = subTopicForm
    subtopic = grade
    return render(request, 'requestTopic.html')
def shop(request):
    return render(request, 'shop.html')
def vote(request):
    return render(request, 'vote.html')
def credentials(request):
    register_form = RegisterForm()
    login_form = LoginForm()
    return render(request, 'signup-in.html', {'register_form' : register_form, 'login_form' : login_form})
def sendMail(request):
    send_mail = PasswordResetForm()
    return render(request, 'send-mail.html', {'mailSending' : send_mail})
def passwordReset(request):
    reset = PasswordResetForm()
    return render(request, 'password-reset.html', {'passwordResetting' : reset})
def error404(request):
    return render(request, '404.html')
