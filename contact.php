<!DOCTYPE html>
<html lang="en-US">
<head>
  <title>Talent Stack</title>
  <meta http-equiv="content-language" content="en" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link type="text/css" rel="stylesheet" href="css/reset.min.css" />
  <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="css/style.css" />
  <link type="text/css" rel="stylesheet" href="css/responsive.css" />
</head>
<body>

  <!-- Header -->
  <?php
    require_once(dirname(__FILE__).DIRECTORY_SEPARATOR.'includes'.DIRECTORY_SEPARATOR.'header.php');
  ?>

  <section>
    <div class="contact-banner-wrapper">
      <img src="images/contact/contact.jpg" class="contact-banner-img" alt="" />
      <img src="images/contact/contact_mobile.png" class="contact-banner-img-mobile" alt="" />
    </div>

    <div class="container">
      <div class="contact-form-wrapper">
        <h1 class="contact-form-heading">Contact Us</h1>
        <form action="" method="POST">
          <div class="formgroup">
            <label class="contact-lbl" for="name">Name</label>
            <input  type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    class="contact-input contact-name"
                    required />
          </div>

          <div class="formgroup">
            <label class="contact-lbl" for="email">Email</label>
            <input  type="email"
                    id="email"
                    name="email"
                    class="contact-input contact-email"
                    placeholder="Your Email Address"
                    required />
          </div>

          <div class="formgroup">
            <label class="contact-lbl" for="phone">Phone Number</label>
            <input  type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number +91"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    class="contact-input contact-phone"
                    required />
          </div>

          <div class="formgroup">
            <label class="contact-lbl" for="message">Message</label>
            <textarea name="message"
                      id="message"
                      rows="5"
                      class="contact-input contact-message"
                      placeholder="Message"></textarea>
          </div>

          <div class="formgroup text-center contact-submit-wrapper">
            <button type="submit" class="contact-submit-btn">Submit</button>
          </div>
        </form>
      </div>
      <p class="contact-desc">
        Lorem ipsum dolor sit amet, augue singulis reprimique eu nam, in sea quis omnes, eam et verear diceret. In per quidam luptatum, cibo ludus et has, ex esse omnium eum. Nonumy admodum nam ex, dolor consul vim an.
        Lorem ipsum dolor sit amet, augue singulis reprimique eu nam, in sea quis omnes, eam et verear diceret. In per quidam luptatum, cibo ludus et has, ex esse omnium eum. Nonumy admodum nam ex, dolor consul vim an.
        Lorem ipsum dolor sit amet, augue singulis reprimique eu nam, in sea quis omnes, eam et verear diceret. In per quidam luptatum, cibo ludus et has, ex esse omnium eum. Nonumy admodum nam ex, dolor consul vim an.
        Lorem ipsum dolor sit amet, augue singulis reprimique eu nam, in sea quis omnes, eam et verear diceret. In per quidam luptatum, cibo ludus et has, ex esse omnium eum. Nonumy admodum nam ex, dolor consul vim an.
        Lorem ipsum dolor sit amet, augue singulis reprimique eu nam, in sea quis omnes, eam et verear diceret. In per quidam luptatum, cibo ludus et has, ex esse omnium eum. Nonumy admodum nam ex, dolor consul vim an.
      </p>
    </div>
  </section>
  <!-- Footer -->
  <?php
    require_once(dirname(__FILE__).DIRECTORY_SEPARATOR.'includes'.DIRECTORY_SEPARATOR.'footer.php');
  ?>

  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
</body>
</html>