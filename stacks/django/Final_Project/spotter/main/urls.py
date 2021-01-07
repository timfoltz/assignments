from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('login', views.login),
    path('logout', views.logout),
    path('register_new_user', views.register_new_user),
    path('dashboard', views.dashboard),
    path('find_gym', views.find_gym),
    path('add_gym', views.add_gym),
    path('join_gym/<int:gym_id>', views.join_gym),
    path('leave_gym/<int:gym_id>', views.leave_gym),
    path('add_gym_photo/<int:gym_id>', views.add_gym_photo),
    # path('edit_gym_info/<int:gym_id>', views.edit_gym_info),
    path('process_gym_edit/<int:gym_id>', views.process_gym_edit),
    path('process_add_gym', views.process_add_gym),
    path('user_profile/<int:user_id>', views.user_profile),
    path('process_user_edit/<int:user_id>', views.process_user_edit),
    path('gym_info/<int:gym_id>', views.gym_info),
    path('process_workout', views.process_workout),
    path('post_workout', views.post_workout),
    path('process_spotter', views.process_spotter),
    path('spotter', views.spotter),
    # path('journal/<int:user_id>', views.journal),
    path('join_spotter/<int:spotter_id>', views.join_spotter),
    path('workout_like/<int:workout_id>', views.workout_like),
    path('tracker', views.tracker)
]
