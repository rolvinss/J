import React from 'react';

export default class MRQOptions extends React.Component{
    render(){
        return (
            <div>
            <div class="container col-md-8">
        <hr>
         <div class="form-group">
                        <!-- option 1 -->
                        <div class="col-md-6">
                            <div class="input-group">
                               <span class="input-group-addon">
                                    <label for="">A </label>

                                 <input type="checkbox" aria-label="..." name="group1" >
                               </span>
                               <input type="text" class="form-control" aria-label="..." placeholder="Option 1" >
                            </div><!-- /input-group -->
                            <br>
                            <div class="input-group">
                                    <span class="input-group-addon" >
                                            <label for="">B </label>
                                      <input type="checkbox" aria-label="..." name="group1">
                                    </span>
                                    <input type="text" class="form-control" aria-label="...">
                                 </div><!-- /input-group -->
                                 <br>
                                <div class="input-group">
                                <span class="input-group-addon">
                                        <label for="">C </label>
                                    <input type="checkbox" aria-label="..." name="group1">
                                </span>
                                <input type="text" class="form-control" aria-label="...">
                                </div><!-- /input-group -->
                                <br>
                                <div class="input-group">
                                        <span class="input-group-addon">
                                                <label for="">D</label>
                                            <input type="checkbox" aria-label="..." name="group1">
                                        </span>
                                        <input type="text" class="form-control" aria-label="...">
                                        </div><!-- /input-group -->
                                        <br>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                            <label for="">E</label>
                                        <input type="checkbox" aria-label="..." name="group1">
                                    </span>
                                    <input type="text" class="form-control" aria-label="...">
                                </div><!-- /input-group -->
                                <br>
                        </div><!-- /.col-lg-6 -->


                      </div>  <!-- end of form-group -->
     </div><!-- end of container -->

            </div>
        );

    }
}
