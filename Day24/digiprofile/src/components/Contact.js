const Contact = () => {
  return (
    <div class="row" id="contact">
      <div class="col-sm-8">
        <h1 class="display-4">Contact Me</h1>
        <div id="conform">
          <form
            action="mailto:janedoe@geemail.com"
            method="POST"
            enctype="text/plain"
            name="EmailForm"
          >
            <b> Name: </b>
            <br />
            <input type="text" size="40" name="ContactName" /> <br />
            <b> Message: </b>
            <br />
            <textarea name="ContactComment" rows="6" cols="40"></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
