#from django.shortcuts import render, get_object_or_404
#from django.http import HttpResponse
#from .forms import RegisterForm, LoginForm, SendEmailForm, PasswordResetForm, subTopicForm
#from django.contrib.auth.models import User

#def index(request):
#    return render(request, 'index.html')
#def forum(request):
#    grade = subTopicForm
#    return render(request, 'forum.html', {'grade' : grade})
#def requestTopic(request, subtopic):
#    grade = subTopicForm
#    subtopic = grade
#    return render(request, 'requestTopic.html')
#def shop(request):
#    return render(request, 'shop.html')
#def vote(request):
#    return render(request, 'vote.html')
#def credentials(request):
#    login_form = LoginForm()
#    if request.method == 'POST':
#        register_form = RegisterForm(request.POST)
#        if register_form.is_valid():
#            if User.objects.filter(email=register_form.cleaned_data['email_address']).exists():
#                return render(request, 'signup-in.html', {
#                    'form': register_form,
#                    'error_message': 'Email already exists.'
#                })
#            elif register_form.cleaned_data['password'] != register_form.cleaned_data['password_confirmation']:
#                return render(request, 'signup-in.html', {
#                    'form': register_form,
#                    'error_message': 'Passwords do not match.'
#                })
#            else:
                # Create the user:
#                user = User.objects.create_user(
#                    register_form.cleaned_data['name'],
#                    register_form.cleaned_data['surname'],
#                    register_form.cleaned_data['minecraft_user'],
#                    register_form.cleaned_data['email_address'],
#                    register_form.cleaned_data['password']
#                )
#                user.first_name = register_form.cleaned_data['name']
#                user.last_name = register_form.cleaned_data['surname']
#                user.username = register_form.cleaned_data['minecraft_user']
#                user.email = register_form.cleaned_data['email_address']
#                user.password = register_form.cleaned_data['password']
#                user.save()

                # redirect to accounts page:
#                return render(request, 'forum.html')
#    else:
#        register_form = RegisterForm()
#    return render(request, 'signup-in.html', {'register_form' : register_form, 'login_form' : login_form})
#def sendMail(request):
#    send_mail = PasswordResetForm()
#    return render(request, 'send-mail.html', {'mailSending' : send_mail})
#def passwordReset(request):
#    reset = PasswordResetForm()
#    return render(request, 'password-reset.html', {'passwordResetting' : reset})
#def error404(request):
#    return render(request, '404.html')

from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import RegisterForm

def register(request):
    if request.method == 'POST':
        register_form = RegisterForm(request.POST)
        if register_form.is_valid():
            register_form.save()
            username = register_form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return render(request, 'signup-in.html', {'register_form' : register_form})
    else:
        register_form = RegisterForm()
    return render(request, 'signup-in.html', {'register_form' : register_form})
