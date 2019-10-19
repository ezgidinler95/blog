import React, { Component } from "react";
import { connect } from 'react-redux';
import '../../../styles/assets/css/font-awesome.css';
//import '../../../styles/assets/css/jquary.fancybox.css';
import '../../../styles/blog.css';


class Layout extends Component {
    async UNSAFE_componentWillMount() {
  
    };
    render() {

      return (

        <div className="App" >
          <div>
            <div className="documentation-menu">
              <div className="row">
                <ul id="menu-main-menu" className="twelve columns">
                  <li>
                    <a className="active" href="#more">
                      Genel Bilgi
                     </a>
                    <ul className="children">
                      <li>
                        <a href="#wp-info">WordPress Information</a>
                      </li>
                      <li>
                        <a href="#RFB">Requirements For sorbroix</a>
                      </li>
                      <li>
                        <a href="#Included">What's Included</a>
                      </li>
                      <li>
                        <a href="#forum-support">Free Support</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Installation">Eğitim Hayatım</a>
                    <ul className="children">
                      <li>
                        <a href="#wpinstallation">WordPress Installation</a>
                      </li>
                      <li>
                        <a href="#ftpinstallation">FTP Installation</a>
                      </li>
                      <li>
                        <a href="#changlog">sorbroix Changelog</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#demo-content">Neden Yazılım</a>
                    <ul className="children">
                      <li>
                        <a href="#all-democontent">Import All Demo Content</a>
                      </li>
                      <li>
                        <a href="#theme-option">Import Theme Option</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Hedefler ve İstekler</a>
                    <ul className="children">
                      <li>
                        <a href="#set_home">Setting Up Home Page</a>
                      </li>
                      <li>
                        <a href="#set_onepage">Setting Up One Page</a>
                      </li>
                      <li>
                        <a href="#set_blogpage">Setting Up Blog large Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#page-builder">Günün Konusu</a>
                    <ul className="children">
                      <li>
                        <a href="#onepage_builder">
                          How to install Element Visual Compusor.
                </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                    <ul className="children">
                      <li>
                        <a href="#create_post">Creating Blog Posts</a>
                      </li>
                      <li>
                        <a href="#blog_option">Blog Theme Options</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#theme_option">Theme Option</a>
                    <ul className="children">
                      <li>
                        <a href="#footer">Footer Theme Option</a>
                      </li>
                      <li>
                        <a href="#style_option">Styling Options</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#widget">Widgets</a>
                  </li>
                  <li>
                    <a href="#extra">Extra</a>
                    <ul className="children">
                      <li>
                        <a href="#extra">Make your site run faster</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container">
              <section id="more" className="Top_doc hentry">
                <h1 className="doc-title">Kim Bu Ezgi :) </h1>
                <article className="doc-content">
                  <div className="column-half">
                    <p>
                      We would like to thank you for purchasing sorbroix! We are very
                      pleased you have chosen sorbroix for your website, you will not be
                      disappointed! Before you get started, please be sure to always check
                      out these documentation files. We outline all kinds of good
                      information, and provide you with all the details you need to use
                      sorbroix. sorbroix can only be used with WordPress and we assume
                      that you already have WordPress installed and ready to go. If you do
                      not, please see our section on WordPress to help you get started.
            </p>
                    <p>
                      If you are unable to find your answer here in our documentation, we
                      encourage you to search our Knowledgebase, watch our Video
              Tutorials, and also perform a{" "}
                      <a href="http://shthemewp@gmail.com/" target="_blank">
                        Forum Search
              </a>{" "}
                      for your answer. Chances are your question or issue have been
                      brought up already and the answer is waiting to be found. If you are
                      unable to find it anywhere, then please go go our forum section and
                      post up a new topic with all the details we need. Please be sure to
                      include your site URL as well. Thank you, we hope you enjoy using
                      sorbroix!
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <img src="assets/images/screenshot.png" alt="screenshot sorbroix" />
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="wp-info" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">WordPress Information</h2>
                </header>
                <article className="entry-content">
                  <p>
                    To install this theme you must have a working version of WordPress
                    already installed. If you need help installing WordPress, follow the
            instructions in{" "}
                    <a href="http://codex.wordpress.org/Installing_WordPress">
                      WordPress Codex
            </a>{" "}
                    or you can watch the{" "}
                    <a href="http://vimeo.com/17147778">Instructional Video</a> created by
                    Woo Themes. Below are all the useful links for WordPress information.
          </p>
                  <div className="column-half">
                    <div className="shortcode-list">
                      <ul>
                        <li>
                          <a href="http://codex.wordpress.org/Installing_WordPress">
                            WordPress Codex
                  </a>{" "}
                          – general info about WordPress and how to install on your server
                </li>
                        <li>
                          <a href="http://vimeo.com/17147778">Instructional Video</a> –
                          awesome How-To video created by Woo Themes
                </li>
                        <li>
                          <a href="http://codex.wordpress.org/First_Steps_With_WordPress">
                            First Steps With WordPress
                  </a>{" "}
                          – general information that covers a wide variety of topics
                </li>
                        <li>
                          <a href="http://codex.wordpress.org/FAQ_New_To_WordPress">
                            FAQ New To WordPress
                  </a>{" "}
                          – the most popular FAQ’s regarding WordPress
                </li>
                        <li>
                          <a href="http://wp.tutsplus.com/sessions/wp101-basix-training/">
                            WP101 Basix Training videos
                  </a>{" "}
                          – some great videos from WPTuts on WordPress
                </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/wplogo.jpg"
                      data-fancybox-group="gallery"
                      title="Lorem ipsum dolor sit amet"
                    >
                      <img src="assets/images/wplogo.jpg" alt />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="RFB" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Requirements For sorbroix</h2>
                </header>
                <article className="entry-content">
                  <p>
                    To use sorbroix, you must be running WordPress 3.1 or higher, PHP5 or
                    higher, and mysql 5 or higher. We have tested it with Mac, Windows and
                    Linux. Below are a list of items you should ensure your host can
                    comply with.
          </p>
                  <div className="column-half">
                    <div className="shortcode-list">
                      <ul>
                        <li>
                          Check to ensure that your web host has the minimum requirements
                          to run WordPress.
                </li>
                        <li>
                          Always make sure they are running the latest version of
                          WordPress
                </li>
                        <li>
                          You can download the latest release of WordPress from official{" "}
                          <a href="http://wordpress.org.">WordPress</a> website{" "}
                        </li>
                        <li>Always create secure passwords FTP and Database</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column-half column-half-last">
                    <div className="bean-note">
                      Hosting is sorbroix secure when PHP applications, like WordPress,
                      are run using your account’s username instead of the server’s
                      default shared username (www or www-data). The most common way for
                      hosting companies to do this is using suPHP. Just ask your potential
              host if they run suPHP or something similar. <br /> <br />
                      We recommend using WpEngine.com or{" "}
                      <a href="http://asmallorange.com">A Small Orange</a> for all your
                      hosting needs.
            </div>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="Included" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">What’s Included</h2>
                </header>
                <article className="entry-content">
                  <p>
                    When you purchase our theme from Themeforest, you need to download the
                    sorbroix files from your Themeforest account. Navigate to your
                    downloads tab on Themeforest and find sorbroix. Click the download
            button to see the two options. The <strong>Main Files</strong> contain
            everything, the <strong>Installable WordPress Theme</strong> is just
                                                       
          </p>
                  <div className="shortcode-list">
                    <ul>
                      <li>
                        <strong>sorbroix Theme Folder</strong> – contains the{" "}
                        <strong>sorbroix.zip</strong> and sorbroix-Child-Theme.zip
                        wordpress theme. The child theme is only for users who make code
                        changes.
              </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="forum-support" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Free Support</h2>
                </header>
                <article className="entry-content">
                  <p>
                    All of our items come with free support, and we have a dedicated mail:{" "}
                    <i>shthemewp@gmail.com</i> to handle your requests. Support is limited
                    to questions regarding the theme’s features or problems with the
                    theme. We are not able to provide support for code customizations or
                    third-party plugins. If you need help with anything other than minor
                    customizations of your theme then you should enlist the help of a
                    developer.
          </p>
                  <div className="clear" />
                </article>
              </section>
              <section id="Installation" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Installation</h2>
                </header>
                <article className="entry-content">
                  <p>
                    You can install the theme in two ways: through WordPress, or via FTP.
  The <strong>sorbroix.zip</strong> file is the Installable WordPres
            two options. The <strong>Main Files</strong> and the{" "}
                    <strong>Installable WordPress Theme</strong>. See below.
          </p>
                  <a
                    className="fancybox"
                    href="assets/images/purchasecode.png"
                    data-fancybox-group="gallery"
                    title="What’s a Themeforest purchase code?"
                  >
                    <img src="assets/images/purchasecode.png" />
                  </a>
                  <br />
                  <h3 style={{ paddingBottom: 0 }}>
                    Downloading The Main Files Gives You All The Content Listed Below
          </h3>
                  <div className="shortcode-list">
                    <ul>
                      <li>
                        <strong>sorbroix Theme Folder</strong> – contains the{" "}
                        <strong>sorbroix.zip</strong> and{" "}
                        <strong>sorbroix-child.zip</strong> wordpress theme. The child
                        theme is only for users who make code changes.
              </li>
                    </ul>
                  </div>
                  <br />
                  <h3 style={{ paddingBottom: 0 }}>
                    Downloading The Installalable WordPress Theme Only Gives You The
                    sorbroix.zip File
          </h3>
                  <div className="shortcode-list">
                    <ul>
                      <li>
                        <strong>sorbroix.zip</strong> – this is the parent wordpress
                        theme, install this via WordPress. If you install it via FTP then
                        unzip it first and use the extracted folder.
              </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="wpinstallation" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">WordPress Installation</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <h3>Follow the steps below to install via WordPress.</h3>
                    <p style={{ paddingTop: 10 }}>
                      <strong>Step 1</strong> – Navigate to{" "}
                      <strong>Appearance &gt; Themes</strong>.
            </p>
                    <p>
                      <strong>Step 2</strong> – Click <strong>Install Themes</strong> and
              hit the <strong>upload</strong> button.
            </p>
                    <p>
                      <strong>Step 3</strong> – Navigate to find the{" "}
                      <strong>“sorbroix.zip”</strong> file on your computer and click{" "}
                      <strong>“Install Now”</strong>
                    </p>
                    <p>
                      <strong>Step 4</strong> – Wait while the theme is uploaded and
                      installed.
            </p>
                    <p>
                      <strong>Step 5</strong> – Activate the newly installed theme. Go to{" "}
                      <strong>Appearance &gt; Themes</strong> and activate it.
            </p>
                    <p>
                      <strong>Step 6</strong> – Then you will get a notification to
                      activate the required plugins: Visual Compusor and Contact Form 7.
                      Follow the steps to instal and activate. The other plugins we
                      include are integrated into the theme and all will be ready to use
                      when you right away.
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/wpinstalltheme.png"
                      data-fancybox-group="gallery"
                      title="Installation Theme in WordPress"
                    >
                      <img src="assets/images/wpinstalltheme.png" />
                    </a>
                  </div>
                  <h3 style={{ clear: "both", paddingTop: 30 }}>
                    Common Install Error: Are You Sure You Want To Do This?
          </h3>
                  <p>
                    If you get the <strong>“Are You Sure You Want To Do This”</strong>{" "}
                    message when installing sorbroix.zip file via WordPress, it means you
                    have an upload file size limit. Install the theme via FTP if this
                    happens, or call your hosting company and ask them to increase the
                    limit.
          </p>
                  <div className="clear" />
                </article>
              </section>
              <section id="ftpinstallation" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">FTP Installation</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <h3>Follow the steps below to install via FTP.</h3>
                    <p style={{ paddingTop: 10 }}>
                      <strong>Step 1</strong> – Log into your hosting space via an FTP
                      software
            </p>
                    <p>
                      <strong>Step 2</strong> – Unzip the <strong>sorbroix.zip</strong>{" "}
                      file and <strong>ONLY</strong> use the extracted{" "}
                      <strong>sorbroix</strong> theme folder
            </p>
                    <p>
                      <strong>Step 3</strong> – Upload the extracted <strong>More</strong>{" "}
                      theme folder into <strong>wp-content &gt; themes</strong> folder
            </p>
                    <p>
                      <strong>Step 4</strong> – Activate the newly installed theme. Go to{" "}
                      <strong>Appearance &gt; Themes</strong> and activate it.
            </p>
                    <p>
                      <strong>Step 6</strong> – Then you will get a notification to
                      activate the required plugins: Visual Compusor and Contact Form 7.
                      Follow the steps to instal and activate. The other plugins we
                      include are integrated into the theme and all will be ready to use
                      when you right away.
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/ftpinstall.jpg"
                      data-fancybox-group="gallery"
                      title="Installation Theme in WordPress"
                    >
                      <img src="assets/images/ftpinstall.jpg" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="changlog" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">sorbroix Changelog</h2>
                </header>
                <article className="entry-content">
                  <p>
                    More is constantly being updated with new features and adjustments.
                    You can always view the most recent update information in the change
                    log in the changelog.txt file inside the theme zip file. You can also
                    view the full change log below.
          </p>
                  <a target="_blank" className="btn large" href="http://shthemetheme.com">
                    {" "}
                    sorbroix Change Log{" "}
                  </a>
                  <div className="clear" />
                </article>
              </section>
              <section id="demo-content" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Demo Content</h2>
                </header>
                <article className="entry-content">
                  <h1>
                    Please Install all Plugins before. Then Import All Data Demo. View
                    Here:
          </h1>
                  <br />
                  <br />
                  <article className="entry-content">
                    <p>
                      When you first install any wordpress theme, it will not contain all
                      the extra content that you might of seen in the live demo. There are
                      two ways you can import the sorbroix Demo Content. Usually you have
                      to import an XML file which can be troublesome. We’ve made it easier
              by creating a Theme Options Demo Content Importer.{" "}
                    </p>
                    <p>
                      <strong>Method 1: Import All Demo Content</strong> – Now users can
                      quickly and easily import our demo content with one click of the
                      button. This is the preferred method because its the fastest and
                      easiest way to get our demo content. Using this method will give you
                      all our pages and posts, several sample sliders of each slider type,
                      widgets, theme option settings and more. If you wish to use our
                      Theme Options Demo Content Importer, please see the “How To Import
                      All Demo Content” section in our documentation.
            </p>
                    <p>
                      <strong>Method 2: Import Theme Option</strong>
                    </p>
                    <p>
                      <strong>
                        {" "}
                        Please Note Some Important Items About The Demo Content
              </strong>
                    </p>
                    <div className="shortcode-list">
                      <ul>
                        <li>
                          <strong>Images</strong> – Our demo images are not included
                          because those are license stock photos that are not allowed to
                          be shared. Instead we include other images in their place
                </li>
                      </ul>
                    </div>
                    <div className="clear" />
                  </article>
                </article>
              </section>
              <section id="all-democontent" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Import All Demo Content</h2>
                </header>
                <article className="entry-content">
                  <p>
                    If would you like to use your site like my demo, you should import
                    options for Theme options and WordPress posts / pages/ Portfolio/ etc.
            We have include 2 import files of sorbroix theme.{" "}
                  </p>
                  <div className="shortcode-list">
                    <ul>
                      <li>
                        WordPress import file -{" "}
                        <strong>
                          {" "}
                          sorbroix_package &gt;&gt; data_export &gt;&gt; content.xml
                </strong>
                      </li>
                      <li>
                        Theme options import file -{" "}
                        <strong>
                          sorbroix_package &gt;&gt; data_export &gt;&gt; theme_options.txt
                </strong>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <br />
                  <div className="column-half">
                    <p>
                      <strong>Step 1 – </strong> Install and activate these plugins before
                      you proceed: Visual Compusor, Contact Form 7.
            </p>
                    <p>
                      WordPress import file :{" "}
                      <strong>
                        Please go to wp admin &gt;&gt; tools &gt;&gt; import &gt;&gt;
                        click WordPress
              </strong>
                      . Then <strong>install recommended plugin</strong> and{" "}
                      <strong>
                        import dummy_contnent &gt;&gt; data_export &gt;&gt;
                        sample_data.xml file.
              </strong>{" "}
                    </p>
                  </div>
                  <div className="column-half column-half-last">
                    <h3>View Gallery Step WordPress import file.</h3>
                    <a
                      className="gallery-importxml"
                      href="assets/images/import_step1.png"
                      data-fancybox-group="gallery"
                      title="Step 1: WordPress import file"
                    >
                      <img src="assets/images/import_step1.png" />
                    </a>
                    <a
                      className="gallery-importxml"
                      href="assets/images/import_step2.png"
                      data-fancybox-group="gallery"
                      title="Step 2: WordPress import file"
                    />
                    <a
                      className="gallery-importxml"
                      href="assets/images/import_step3.png"
                      data-fancybox-group="gallery"
                      title="Step 3: WordPress import file"
                    />
                    <a
                      className="gallery-importxml"
                      href="assets/images/import_step4.png"
                      data-fancybox-group="gallery"
                      title="Step 4: WordPress import file"
                    />
                    <a
                      className="gallery-importxml"
                      href="assets/images/import_step5.png"
                      data-fancybox-group="gallery"
                      title="Step 5: WordPress import file"
                    />
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="theme-option" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Import Theme Option</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <p>
                      For Theme options import file : Please go to{" "}
                      <strong>
                        wp admin &gt;&gt; appearance &gt;&gt; theme options &gt;&gt; click
                        Backup options
              </strong>
                      . Then compy all{" "}
                      <strong>
                        dummy_contnent &gt;&gt; data_export &gt;&gt; theme_options.txt
              </strong>{" "}
                      file and paste here.{" "}
                    </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/import2.png"
                      data-fancybox-group="gallery"
                      title="Step 1: WordPress import file"
                    >
                      <img src="assets/images/import2.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="Header" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Header</h2>
                </header>
                <article className="entry-content">
                  <p>
                    The header is probably one of the first things you will want to setup.
                    The header consists of pretty much everything above and including the
                    menu, and we are also going to include the sliding bar and page title
                    bar in this section. There are many different elements to the header
                    and many ways to customize it including images, colors, content,
                    design and more. All of this is done via our sorbroix Admin Panel. The
                    following sections will cover several different sections of the header
                    that are listed below.
          </p>
                  <div className="shortcode-list">
                    <ul>
                      <li>
                        <strong>Adding The Logo &amp; Favicons</strong>
                      </li>
                      <li>
                        <strong>Setting Up The Menu Home</strong>
                      </li>
                      <li>
                        <strong>Setting Up The Menu Blog</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="add_logofavicon" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Adding The Logo &amp; Favicons</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <h3>To Insert Your Logo and Your Favicon, Follow The Steps Below.</h3>
                    <p>
                      <strong> Step 1:</strong> More requires that you upload your logo as
                      an image file (Logo.png). And Setup Logo for version Light and
                      Version Dark Do you want.
            </p>
                    <p>
                      <strong>Step 2:</strong> More requires that you upload your Favicon
                      as an image file (Favicon.ico)
            </p>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="setting_menu" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Setting Up The Menu</h2>
                </header>
                <article className="entry-content">
                  <p>
                    More supports custom WordPress menus, with multiple levels of dropdown
                    support for the main menu. There are 2 areas of the theme where you
                    can assign a menu; the home menu, the other page menu. Each of these
                    menu locations can have a custom menu assigned. Once a menu is created
                    and assigned to the location, it will show up on the site. There are
                    also several theme options to customize the menu. Please see below for
                    the menu locations, how to create a new menu and the menu theme
                    options.
          </p>
                  <div className="column-half">
                    <h3>More Offers 2 Different Menu Locations</h3>
                    <div className="shortcode-list">
                      <ul>
                        <li>
                          <strong>Menu Home Page</strong> – this is the Home menu that
                          shows in the Home Page.
                </li>
                        <li>
                          <strong>Menu Use For All Page.</strong> – this is the menu that
                          can be assigned to the single, blog, page...
                </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/setup_menu.png"
                      data-fancybox-group="gallery"
                      title="Step 1: WordPress import file"
                    >
                      <img src="assets/images/setup_menu.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
  
              <section id="set_home" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Setting Up Home Page</h2>
                </header>
                <article className="entry-content">
                  <p>
                    Setting up your home page is the same as setting up any other regular
                    pages except that you need to specify in the settings which page will
                    be your main home page. More includes several pre-designed home page
                    options. Any of the layout options you see on our demo can be imported
                    through our demo content importer, or from copying the individual page
                    content from our docs in the “How To Import Individual Pages” section.
                    However, you are not stuck with our pre-designed layouts, you can
                    build any type of home page you desire using our Page Builder
                    elements. You can mix and match anyway you like.
          </p>
                  <div className="column-half">
                    <h3>To Set Your Home Page, Follow These Steps</h3>
                    <p style={{ paddingTop: 10 }}>
                      <strong>Step 1</strong> – Navigate to{" "}
                      <strong>Settings &gt; Reading</strong>.
            </p>
                    <p>
                      <strong>Step 2</strong> – Select “A Static Page” option.
            </p>
                    <p>
                      <strong>Step 3</strong> – Choose the page you want as your home page
                      from the dropdown list.
            </p>
                    <p>
                      <strong>Step 4</strong> – This is also the same spot you select the
                      Blog page as the post page.
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/home_setting.png"
                      data-fancybox-group="gallery"
                      title="Setting Up The Menu Other Page"
                    >
                      <img src="assets/images/home_setting.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="set_onepage" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Setting Up One Page</h2>
                </header>
                <article className="entry-content">
                  <p>
                    More has the ability for you to make a one page site with a parallax
                    scrolling menu. Most sites are traditionally setup with individual
                    pages, each page with its own content. A one page site allows you to
                    put all the content on one page, and the menu items will link to each
                    different section of the page. Think of it as a full site but all on
                    one page. A parallax one page site requires you to have a custom menu,
                    a page with menu_anchors in the content and the custom menu assigned
                    to the page. Please read below for information on how to set this up.
          </p>
                  <div className="column-half">
                    <h3>First Create A Custom Menu For Your One Page</h3>
                    <p style={{ paddingTop: 10 }}>
                      <strong>Step 1 – </strong> Navigate to Appearance &gt; Menus section
                      of your admin and click “Create A New Menu” link and assign it a
                      name.
            </p>
                    <p>
                      <strong>Step 2 – </strong>Each menu item you add needs a unique
                      anchor name in the URL field. These names act as anchors, and will
                      link to the corresponding anchor name in your page content. Use the
                      “Links” box on the left hand side to add menu items. In the “URL”
                      field type the anchor of your section, ex: #intro and then assign a
                      name to the menu item. Click the “Add to Menu” button.
            </p>
                    <p>
                      <strong>Step 3 – </strong>Repeat step 2 for each menu item, giving
                      each a unique #name.
            </p>
                    <p>
                      <strong>Step 4 – </strong>Once you have added your menu items, be
                      sure to click the “Save” button.
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/menu-onepage.png"
                      data-fancybox-group="gallery"
                      title="Setting Up The Menu Other Page"
                    >
                      <img src="assets/images/menu-onepage.png" />
                    </a>
                  </div>
                  <div className="clear" />
                  <div className="column-half">
                    <h3>To Create The Home Page, Follow The Steps Below.</h3>
                    <p style={{ paddingTop: 10 }}>
                      <strong>Step 1</strong> – Create a new page and give it any name you
                      wish.
            </p>
                    <p>
                      <strong>Step 2</strong> – In the <strong>Page Attributes</strong>{" "}
                      box on the right hand side, set the <strong>Template</strong> to
                      Ligh , Dark, Moving, Video Youtube.
            </p>
                    <p>
                      <strong>Step 3</strong> – Insert your Template Page Builder into the
                      content.
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/home.png"
                      data-fancybox-group="gallery"
                      title="Setting Up The Home Page"
                    >
                      <img src="assets/images/home.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="set_blogpage" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Setting Up Blog Page</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <h3>To Create The Blog Page, Follow The Steps Below.</h3>
                    <p style={{ paddingTop: 10 }}>
                      <strong>Step 1</strong> – Create a new page and give it any name you
                      wish.
            </p>
                    <p>
                      <strong>Step 2</strong> – In the <strong>Page Attributes</strong>{" "}
                      box on the right hand side, set the <strong>Template</strong> to
                      Blog
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/blog.png"
                      data-fancybox-group="gallery"
                      title="Setting Up The Blog Page"
                    >
                      <img src="assets/images/blog.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="onepage_builder" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">
                    How to use Visual Compusor to create the Home page
          </h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <h1 className="entry-title">
                      Please <strong>DON'T UPDATE PLUGINS</strong>. If there are any
                      updates yet We will update the theme on ThemeForest and You will
                      download again Theme.Thanks.
            </h1>
                    <h3>
                      View sorbroix Video How to use Visual Compusor to create the Home
                      page
            </h3>
                    <h4>
                      View Video here:{" "}
                      <a
                        href="https://www.youtube.com/watch?v=tUQkTgzCuLc&list=PLtjcZuvxijuLIe8qhZkpOPx_CgCd5JGB0"
                        target="_blank"
                      >
                        View Video{" "}
                      </a>
                    </h4>
                  </div>
                  <div className="clear" />
                  <hr />
                  <div className="column-half">
                    <h3>Setup Contact Form</h3>
                    <p>
                      Enter your email in box. It will received mail from contact form
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/contact-setup.png"
                      data-fancybox-group="gallery"
                      title="Contact Setup"
                    >
                      <img src="assets/images/contact-setup.png" />
                    </a>
                  </div>
                  <div className="clear" />
                  <hr />
                  <div className="clear" />
                  <div className="column-half">
                    <h3>Setup Visual Composer Home Page</h3>
                    <p>Chosen add row and chosen type row visual composer you want</p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/row-setup.png"
                      data-fancybox-group="gallery"
                      title="Row Setup"
                    >
                      <img src="assets/images/row-setup.png" />
                    </a>
                  </div>
                  <hr />
                  <div className="clear" />
                  <p>Chosen block visual composer in it</p>
                  <a
                    className="fancybox"
                    href="assets/images/visual-setup.png"
                    data-fancybox-group="gallery"
                    title="Visual Setup"
                  >
                    <img src="assets/images/visual-setup.png" />
                  </a>
                </article>
              </section>
              <section id="create_post" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Creating Blog Posts</h2>
                </header>
                <article className="entry-content">
                  <p>
                    No matter which method or methods you use to display your blog posts,
                    the first thing you need to do is create the blog posts. More offers
                    several blog post types, image, image slideshows, video and more on
                    the way. Each blog post you make will be able to be displayed using
                    any of the 3 methods described above. And with the ability to assign
                    custom categories to each post, you can easily display a set of posts
                    based on category. See below for information on how to create blog
                    posts.
          </p>
                  <div className="column-half">
                    <h3>Follow the Steps Below To Create A Blog Post</h3>
                    <p style={{ paddingTop: 10 }}>
                      <strong>Step 1</strong> – Navigate to Posts in your WordPress admin.
            </p>
                    <p>
                      <strong>Step 2</strong> – Click on Add New to make a new post.
                      Create a title and insert your post content in the editing field.
                      You can use any of our short code builder elements inside the post.
            </p>
                    <p>
                      <strong>Step 3</strong> – Add Categories from the right side. To
                      assign it to the post, check the box next to the Category name.
            </p>
                    <p>
                      <strong>Step 4</strong> – Add Tags from the right side. Type the
                      name of the tag in the field, separate multiple tags with commas.
            </p>
                    <p>
                      <strong>Step 5</strong> – For a single image, click the first
                      Featured Image Box, select an image and click “Set Featured Image”.
            </p>
                    <p>
                      <strong>Step 8</strong> – Once you are finished, click Publish to
                      save the post.
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/blog-post.png"
                      data-fancybox-group="gallery"
                      title="Create a New Post"
                    >
                      <img src="assets/images/blog-post.png" />
                    </a>
                  </div>
                  <div className="clear" />
                  <h3>
                    Here Is A Screenshot That Shows The Various Areas Of The Blog Post
                    Page Described Above.
          </h3>
                  <a
                    className="fancybox"
                    href="assets/images/new_post.png"
                    data-fancybox-group="gallery"
                    title="Create a New Post"
                  >
                    <img src="assets/images/new_post.png" />
                  </a>
                </article>
              </section>
              <section id="blog_option" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Blog Theme Options</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half column-half-last">
                    <p>
                      More includes a highly advanced theme options panel organized into
                      sections that allows users to customize many different aspects of
                      the theme. There is a Blog section of theme options that allows you
                      to customize different aspects of the blog; excerpts, Title, and so
              much more. See the information below.{" "}
                    </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/theme-option2.png"
                      data-fancybox-group="gallery"
                      title="Create a New Post"
                    >
                      <img src="assets/images/theme-option2.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="new_portfolio" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Creating Portfolio Posts</h2>
                </header>
                <article className="entry-content">
                  <p>
                    After you have made your portfolio page, you need to create portfolio
                    posts so they will show up on the portfolio pages. More offers several
                    options for portfolio posts, and with the ability to assign custom
                    categories to each post, you can easily display a set of posts based
                    on category. Each portfolio post offers several ways to add tags,
                    categories. Categories are the filters you see above the post that
                    allow the viewer to sort the posts. Tags are used to add additional
                    meta info to the post. See below for information on how to create
                    portfolio posts.
          </p>
                  <div className="column-half">
                    <h3>Follow the Steps Below To Create A Portfolio Post</h3>
                    <p style={{ paddingTop: 10 }}>
                      <strong>Step 1</strong> – Navigate to Portfolio in your WordPress
                      admin.
            </p>
                    <p>
                      <strong>Step 2</strong> – Click on Add New to make a new post.
                      Create a title and insert your post content in the editing field.
                      You can use any of our short code builder elements inside the post.
            </p>
                    <p>
                      <strong>Step 3</strong> – Add Categories from the right side. To
                      assign it to the post, check the box next to the Category name.
                      These Categories are the filters that will sit above your portfolio
                      images and allow you to filter the different types of projects.
            </p>
                    <p>
                      <strong>Step 4</strong> – Add Link Facebook, Linkedin, Instagram
            </p>
                    <p>
                      <strong>Step 5</strong> – Add Link out Project.
            </p>
                    <p>
                      <strong>Step 6</strong> – For a single image, click the first
                      Featured Image Box, select an image and click “Set Featured Image”.
            </p>
                    <p>
                      <strong>Step 7</strong> – For a slideshow,{" "}
                      <a
                        target="_blank"
                        href="http://www.wpbeginner.com/beginners-guide/how-to-create-an-image-gallery-in-wordpress/"
                      >
                        insert more than one Gallery
              </a>
                      , each image will be a slide in the slideshow.
            </p>
                    <p>
                      <strong>Step 8</strong> – For a video post, paste the Link video
                      from either Youtube or Vimeo into the Video Link field.
            </p>
                    <p>
                      <strong>Step 9</strong> – Select any Post Format Options box.
            </p>
                    <p>
                      <strong>Step 10</strong> – Once you are finished, click Publish to
                      save the post.
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/portfolio.png"
                      data-fancybox-group="gallery"
                      title="Installation Theme in WordPress"
                    >
                      <img src="assets/images/portfolio.png" />
                    </a>
                  </div>
                  <div className="clear" />
                  <h3>
                    Here Is A Screenshot That Shows The Various Areas Of The Portfolio
                    Post Page Described Above.
          </h3>
                  <a
                    className="fancybox"
                    href="assets/images/portfolio_post.png"
                    data-fancybox-group="gallery"
                    title="Installation Theme in WordPress"
                  >
                    <img src="assets/images/portfolio_post.png" />
                  </a>
                  <div className="clear" />
                </article>
              </section>
              <section id="footer" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Footer Theme Options</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <p>
                      <strong>Setting Up:</strong> Footer Text
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/theme-option4.png"
                      data-fancybox-group="gallery"
                      title="Footer Theme Options"
                    >
                      <img src="assets/images/theme-option4.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="style_option" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Styling Options</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <div className="shortcode-list">
                      <ul>
                        <li>
                          <strong>Right-to-Left Language Support : </strong>{" "}
                          <a href="https://codex.wordpress.org/Right-to-Left_Language_Support">
                            Language Support
                  </a>
                        </li>
                        <li>
                          <strong>Select Body Font Family :</strong> More allows users to
                          chooose from any of the 600+ Google Fonts
                </li>
                        <li>
                          <strong>Theme Color :</strong>Unlimited Color Theme
                </li>
                        <li>
                          <strong>Footer Background Color</strong>
                        </li>
                        <li>
                          <strong>Footer Text Color</strong>
                        </li>
                        <li>
                          <strong>Style Css :</strong> More Css
                </li>
                      </ul>
                    </div>
                  </div>
                  <div className="column-half column-half-last">
                    <a
                      className="fancybox"
                      href="assets/images/theme-option5.png"
                      data-fancybox-group="gallery"
                      title="Footer Theme Options"
                    >
                      <img src="assets/images/theme-option5.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="widget" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Setting Up The Widget</h2>
                </header>
                <article className="entry-content">
                  <div className="column-half">
                    <p>
                      <strong>Step 1</strong> Navigate to Appearance &gt; Widgets.
            </p>
                  </div>
                  <div className="column-half column-half-last">
                    <h3>
                      Here Is A Screenshot That Shows The Various Areas Of The Widget
                      Section Described Above.
            </h3>
                    <a
                      className="fancybox"
                      href="assets/images/widget.png"
                      data-fancybox-group="gallery"
                      title="Installation Theme in WordPress"
                    >
                      <img src="assets/images/widget.png" />
                    </a>
                  </div>
                  <div className="clear" />
                </article>
              </section>
              <section id="extra" className="hentry">
                <header className="entry-header">
                  <h2 className="entry-title">Make your site run faster</h2>
                </header>
                <article className="entry-content">
                  <p>
                    Get a good hosting You may not think that this is important, but if
                    you want your site to display really fast you need to get a good
                    hosting. This is the first step in having a fast site, which also
                    translates into more views, which also translates into a better SEO,
                    which finally translates into more sales. (affiliate links below)
                    There are three hosting companies which i recommend:
          </p>
                  <div className="shortcode-list">
                    <ul>
                      <li>
                        Media Temple:{" "}
                        <a href="http://mediatemple.net" target="_blank">
                          http://mediatemple.net
                </a>{" "}
                        - if you want a premium WordPress hosting which is easy to manage
                        and works pretty well, this is a good choice to host your website
                        on.
              </li>
                      <li>
                        A Small Orange:{" "}
                        <a href="http://asmallorange.com" target="_blank">
                          http://asmallorange.com
                </a>{" "}
                        - this is another good hosting company, which i’m currently using
                        to host my theme demos on. If you bought this theme you probably
                        liked the speed as well, so i highly recommend ASO to host your
                        themes on (especially the Cloud VPS option).
              </li>
                      <li>
                        WPEngine:{" "}
                        <a href="http://wpengine.com" target="_blank">
                          http://wpengine.com
                </a>{" "}
                        - definitely not as cheap as the two examples above, but if you
                        really want an incredibly fast website and absolutely no headaches
                        in managing it, WPEngine is the way to go. With it you don’t have
                        to worry about security, caching, updates, etc. Everything is
                        handled by a great theme of professionals ready to help you with
                        everything. You just need to care about your content.
              </li>
                    </ul>
                  </div>
                  <br />
                  <h3 style={{ paddingBottom: 5 }}>Optimize images</h3>
                  <p>
                    Always optimize/compress your jpeg images before uploading them to the
                    server. Large images should be compressed at around 90% image quality
                    and you should also try to limit the use of lossless image files
                    (uncompressed pngs).
          </p>
                  <br />
                  <h3 style={{ paddingBottom: 5 }}>Use a caching plugin</h3>
                  <p>
                    I can’t recommend enough the necessitiy go good caching. If you use a
                    managed hosting such as WPEngine you don’t need this. But if you are
                    using ASO or MT or any other hosting you need to cache your content.
                    For this purpose, i recommend W3 Total Cache! It’s a great and easy to
                    use plugin, and with only a bit of work you can double your site’s
                    speed. See this ticket for more info on how to configure this plugin:
            <a
                      href="http://rubenbristian.ticksy.com/ticket/119133"
                      target="_blank"
                    >
                      http://rubenbristian.ticksy.com/ticket/119133
            </a>
                  </p>
                  <div className="clear" />
                </article>
              </section>
            </div>
          </div>;
      </div >
      );
    }
  }
  
  const mapStateToProps = ({ }) => {
    return {
  
    }
  }
  
  const mapDispatchToProps = {
  
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)((Layout));