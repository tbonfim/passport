// expose our config directly to our application using module.exports
module.exports = {

  //https://dev.twitter.com/
  'twitterAuth': {
      'consumerKey': 'CJWOXklHh2iJLdX8OeXBatd7G',
      'consumerSecret': 'ZdoOupziT1PIJykk6iPLMM3ud8yBlgg3Wxp7GVMU4UAMvHKqU3',
      'callbackURL': 'http://localhost:8080/auth/twitter/callback'
  },
  'facebookAuth': {
    'clientID': '1675914896001421',
    'clientSecret': '7fe0217711792f908161a1efb4711842',
    'callbackURL': 'http://localhost:8080/auth/facebook/callback'
  },
  //console.developer.google.com or https://console.cloud.google.com
  'googleAuth': {
    'clientID': '87668141240-tiqv5uie7i0oe8nq2tlrr10qu6jkd1pa.apps.googleusercontent.com',
    'clientSecret': 'mLtzT34fWm9-RTRYjqAIigbe',
    'callbackURL': 'http://localhost:8080/auth/google/callback'
  },

  // Linkedin
  'linkedinAuth': {
    'clientID': '77z07zaump9s82',
    'clientSecret': '0kRHaGm3QDEVXfWQ',
    'callbackURL': 'http://localhost:8080/auth/linkedin/callback'
  }
};