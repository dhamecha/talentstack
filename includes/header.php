<?php
// Development
  // define('APP_PATH', "/ts/");

// Production
  define('APP_PATH', "/");
?>

<header>
  <nav class="navbar navbar-expand-lg navbar-light ts-navbar">
    <a class="navbar-brand custom-navbar-brand" href="#">
      <img  src="images/logos/ts_logo_white.svg"
            alt="Talent Stack"
            class="ts-logo-ini" />

      <img  src="images/logos/ts_logo.svg"
            alt="Talent Stack"
            class="ts-logo" />
    </a>
    <button class="navbar-toggler custom-navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav custom-navbar-nav">
        <li class="nav-item home-page-nav-li">
          <a class="nav-link custom-nav-link" href="<?php echo APP_PATH ?>about.php">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item home-page-nav-li">
          <a class="nav-link custom-nav-link" href="<?php echo APP_PATH ?>press.php">Press</a>
        </li>

        <li class="nav-item home-page-nav-li">
          <a class="nav-link custom-nav-link disabled" href="<?php echo APP_PATH ?>contact.php">Contact Us</a>
        </li>

        <li class="nav-item home-page-nav-li">
          <a class="nav-link custom-nav-link disabled" href="<?php echo APP_PATH ?>services.php">Services</a>
        </li>

        <li class="nav-item home-page-nav-li">
          <a class="nav-link custom-nav-link disabled" href="<?php echo APP_PATH ?>company.php">Company Profile</a>
        </li>
      </ul>
    </div>
  </nav>
</header>