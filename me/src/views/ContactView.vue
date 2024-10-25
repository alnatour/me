<template>
  <!-- contact -->
  <div>
    <Breadcrumb>
      <template v-slot:heading>Kontakt uns</template>
    </Breadcrumb>

    <section class="section">
      <div class="container">
        <div class="row mb-4">
          <h5 class="m-4">
            Sie interessieren sich für eine individuelle Web-Entwicklung? Gerne
            beantworten wir Ihre Fragen zu den möglichen Systemen und
            Technologien für Ihre neue Webseite.
          </h5>
        </div>
        <div class="row">
          <div class="col-lg-4 offset-lg-1 col-md-5">
            <h2 class="section-title">Kontakt uns</h2>
            <ul class="pl-0">
              <!-- contact items -->
              <li class="d-flex mb-30">
                <i class="round-icon mr-3 ti-mobile"></i>
                <div class="align-self-center font-primary" style="margin-left:15px">
                  <p>+43 68110868566</p>
                </div>
              </li>
              <li class="d-flex mb-30">
                <i class="round-icon mr-3 ti-email"></i>
                <div class="align-self-center font-primary" style="margin-left:15px">
                  <p>abdo.alnatoor@gmail.com</p>
                  <p>aaa.alnatour@email.com</p>
                </div>
              </li>
              <li class="d-flex mb-30">
                <i class="round-icon mr-3 ti-map-alt"></i>
                <div class="align-self-center font-primary" style="margin-left:15px">
                  <p>Kreuzgasse 44</p>
                  <p>Wien, AT</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- form -->
          <div class="col-lg-6 col-md-7">
            <div class="p-5 rounded box-shadow">
              <form action="#" method="post" class="row">
                <div class="col-lg-6">
                  <input type="text" name="name" id="name" class="form-control" placeholder="Name" required="" />
                </div>
                <div class="col-lg-6">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email Address"
                    required="" />
                </div>
                <div class="col-12">
                  <input type="text" name="subject" id="subject" class="form-control" placeholder="Subject"
                    required="" />
                </div>
                <div class="col-12">
                  <textarea class="form-control p-2" name="message" id="message" placeholder="Your Message Here..."
                    required="" style="height: 150px"></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit" value="send">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="map">
      <!-- Google Map -->
      <div style="width: 100%">
        <iframe scrolling="no" marginheight="0" marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=westbahnhof%201150+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%" height="450" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">distance
            maps</a></iframe>
      </div>
    </section>
  </div>
  <!-- /contact -->
</template>

<script>
export default {
  components: {},

  setup() {
    return {};
  },
};
</script>

<style>
</style>
