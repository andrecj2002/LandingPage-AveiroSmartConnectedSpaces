<template>
  <div class="container-lg py-16">
    <v-card max-width="600" class="mx-auto pa-8">
      <h1 class="text-h3 mb-6">FormSubmit Test Page</h1>
      <p class="text-body-1 mb-6">Use this simple form to test if FormSubmit.co is working:</p>
      
      <!-- Simple HTML form without Vuetify -->
      <form
        action="https://formsubmit.co/joaoajorge@ua.pt"
        method="POST"
      >
        <input type="hidden" name="_subject" value="TEST - ASCS Form">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="http://localhost:3000/success">
        
        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">Name:</label>
          <input 
            type="text" 
            name="name" 
            required
            style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 4px; font-size: 16px;"
            placeholder="Your name"
          >
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">Email:</label>
          <input 
            type="email" 
            name="email" 
            required
            style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 4px; font-size: 16px;"
            placeholder="your@email.com"
          >
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">Message:</label>
          <textarea 
            name="message" 
            required
            rows="4"
            style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 4px; font-size: 16px;"
            placeholder="Test message"
          ></textarea>
        </div>

        <button 
          type="submit"
          style="width: 100%; padding: 16px; background-color: #0E0971; color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer;"
        >
          Send Test Email
        </button>
      </form>

      <v-divider class="my-8"></v-divider>

      <div class="bg-warning pa-4 rounded">
        <h3 class="text-h6 mb-3">🔍 Debugging Checklist:</h3>
        <ol style="line-height: 1.8;">
          <li>Submit this form with real data</li>
          <li>Check if you're redirected to /success page</li>
          <li>Check joaoajorge@ua.pt inbox (and spam folder!)</li>
          <li>Check the sender's email inbox for confirmation</li>
          <li>Wait 1-2 minutes (emails might be delayed)</li>
        </ol>
      </div>

      <v-alert type="info" class="mt-6">
        <strong>Still not working?</strong><br>
        Visit <a href="https://formsubmit.co/joaoajorge@ua.pt" target="_blank" style="color: white; text-decoration: underline;">https://formsubmit.co/joaoajorge@ua.pt</a> 
        to see if there's a status message or if you need to reverify.
      </v-alert>
    </v-card>
  </div>
</template>

<script setup lang="ts">
// Simple test page - no complex logic needed
</script>
