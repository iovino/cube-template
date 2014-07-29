<!-- about section -->
<div id="about-page" class="page">
    <h2 class="page-title">ABOUT</h2>
    <a class="page-anchor text-center" href="#about">+</a>

    <div class="container">
        <!-- mission statement and targets -->
        <h3 class="page-section-title">MISSION & TARGETS</h3>
        <p class="page-section-excerpt">Praesent turpis pede varius sed tincidunt sed pellentesque in nisi usce malesuada gravida tellus. Curabitur nisi odio ultricies fermentum. Morbi elit. Aliquam faucibus ed vehicula congue diam. Nam nulla augue, faucibus nec, lacinia quis, ornare eros. Suspendisse vel justo malesuada venenatis velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

        <div class="row">
            <div class="col-xs-12 col-md-4">
                <div class="about-box" data-animated="bounceIn">
                    <h3>WHO WE ARE</h3>
                    <p>Ut sodales feugiat nulla. Suspendisse risus odio, posuere a, volutpat ac, adipiscing pellentesque, diam. Etiam in enim sed felis interdum lobortis.</p>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="about-box" data-animated="bounceIn">
                    <h3>WHY CHOOSE US</h3>
                    <p>Ut sodales feugiat nulla. Suspendisse risus odio, posuere a, volutpat ac, adipiscing pellentesque, diam. Etiam in enim sed felis interdum lobortis.</p>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="about-box" data-animated="bounceIn">
                    <h3>WORK FEATURES</h3>
                    <p>Ut sodales feugiat nulla. Suspendisse risus odio, posuere a, volutpat ac, adipiscing pellentesque, diam. Etiam in enim sed felis interdum lobortis.</p>
                </div>
            </div>
        </div>
        <!-- /mission statement and targets -->

        <!-- team members & skills -->
        <h3 class="page-section-title">TEAM & SKILLS</h3>
        <p class="page-section-excerpt">Praesent turpis pede varius sed tincidunt sed pellentesque in nisi usce malesuada gravida tellus. Curabitur nisi odio ultricies fermentum. Morbi elit. Aliquam faucibus ed vehicula congue diam. Nam nulla augue, faucibus nec, lacinia quis, ornare eros. Suspendisse vel justo malesuada venenatis velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

        <div class="row">
            <?php for($i=1; $i <= 4; $i++) : ?>
                <!-- team member -->
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="team-box text-center" data-animated="bounceIn">
                        <div class="team-photo">
                            <img src="http://www.biancazenkees.com/wp-content/uploads/2014/04/bradford-shellhammer-fab-cofounder-lead-designer-wired-design.jpg" alt="" height="160"/>
                        </div>

                        <div class="team-info">
                            <h4 class="team-name">KEVIN THOMAS</h4>
                            <span class="team-title">Digital Artist</span>
                        </div>

                        <div class="team-skills">
                            <div class="piechart" data-percent="<?php echo $i * 10 + 50 ?>">
                                <span></span>
                                Photoshop
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /team member -->
            <?php endfor; ?>
        </div>
        <!-- /team members & skills -->
    </div>

</div>
<!-- /about section -->
