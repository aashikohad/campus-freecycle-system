Graphical Authentication System

A simple and secure graphical authentication system built using Python and Flask.
This project allows users to register and log in by selecting images instead of typing traditional passwords, enhancing usability and security. Designed mainly for learning and academic purposes.

Overview

Traditional text-based passwords are often hard to remember and vulnerable to attacks.
This system replaces text passwords with a graphical image-based selection, making authentication easier to recall and more resistant to common attacks.

How It Works

Registration: User picks a set of images (graphical password).
Authentication: User must select the same images in the correct order to log in.
Backend verifies pattern and grants access.

Installation

1.Clone the repository: 
git clone https://github.com/aashikohad/graphical-authentication-system.git

2.Navigate to project folder: 
cd graphical-authentication-system

3.Create and activate a Python virtual environment: 
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

4.Install dependencies: 
pip install -r requirements.txt

Run the Project

1.Set environment variables (example for Flask): 
export FLASK_APP=app.py
export FLASK_ENV=development

2.Start the server: 
flask run

3.Open your browser and go to: 
http://127.0.0.1:5000/


