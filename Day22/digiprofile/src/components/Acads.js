const Acads = () => {
  return (
    <div class="row" id="acads">
      <div class="col-sm-8">
        <h1 class="display-4">Academics</h1>
        <table id="score" class="table table-striped table-bordered">
          <tr>
            <th>Course Details</th>
            <th>Institution</th>
            <th>University/Board</th>
            <th>Year of passing</th>
            <th>CGPA</th>
          </tr>

          <tr>
            <td>Bachelor of Technology (Computer Science)</td>
            <td>Keshav Memorial Institute of Technology</td>
            <td>JNTUH</td>
            <td>2021</td>
            <td>7.32</td>
          </tr>

          <tr>
            <td>Intermediate-MPC</td>
            <td>Narayana Junior College, TS</td>
            <td>JNTUH</td>
            <td>2017</td>
            <td>93.9%</td>
          </tr>

          <tr>
            <td>School of Secondary Certificate</td>
            <td>Vijaya Ratna Concept School</td>
            <td>SSC</td>
            <td>2015</td>
            <td>9.5</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Acads;
