# Generated by Django 4.0.4 on 2022-05-04 00:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_admin',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='is_verified',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='user_bio',
            field=models.CharField(default='None', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='user_photo',
            field=models.ImageField(default='None', upload_to=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='user_reputation',
            field=models.DecimalField(decimal_places=1, default=50, max_digits=3),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='user_theme',
            field=models.CharField(default='default', max_length=50),
            preserve_default=False,
        ),
    ]
