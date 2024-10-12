import requests
import os

def send_otp(otp,mobile_number):
    url = os.environ.get('FAST2SMS_URL')
    
    querystring = {
        "authorization":os.environ.get('FAST2SMS_KEY'),
        "variables_values":otp,
        "route":"otp",
        "numbers":mobile_number
        }

    headers = {
        'cache-control': "no-cache"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    return(response.text)