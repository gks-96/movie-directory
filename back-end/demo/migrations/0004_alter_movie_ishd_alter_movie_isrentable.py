# Generated by Django 4.2.15 on 2024-08-22 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('demo', '0003_alter_movie_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='isHd',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='movie',
            name='isRentable',
            field=models.BooleanField(default=False),
        ),
    ]
