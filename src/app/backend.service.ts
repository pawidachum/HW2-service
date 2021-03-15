import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  getHome(): String { 
    return `
    <h1 class="home">HOME</h1>
    <div class="body">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi corporis, hic eaque soluta iure nulla expedita ducimus officia amet dolorum modi nisi, necessitatibus minus ipsam consequatur. Beatae totam eos dolore quisquam sunt sit ad dolorem consectetur veritatis. Beatae totam cum corporis consequatur suscipit assumenda velit minus rerum aperiam quae cumque ea quibusdam consectetur voluptatum facere ut itaque, odit quasi autem error incidunt? Dolore, molestiae fugit, quas ratione exercitationem minus vitae mollitia earum porro dignissimos nesciunt officia eius quia, sit consequatur adipisci fugiat laudantium iste eveniet incidunt neque omnis iusto voluptatibus animi! Eius reprehenderit dicta dignissimos obcaecati repudiandae ab consequatur.</p><br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi corporis, hic eaque soluta iure nulla expedita ducimus officia amet dolorum modi nisi, necessitatibus minus ipsam consequatur. Beatae totam eos dolore quisquam sunt sit ad dolorem consectetur veritatis. Beatae totam cum corporis consequatur suscipit assumenda velit minus rerum aperiam quae cumque ea quibusdam consectetur voluptatum facere ut itaque, odit quasi autem error incidunt? Dolore, molestiae fugit, quas ratione exercitationem minus vitae mollitia earum porro dignissimos nesciunt officia eius quia, sit consequatur adipisci fugiat laudantium iste eveniet incidunt neque omnis iusto voluptatibus animi! Eius reprehenderit dicta dignissimos obcaecati repudiandae ab consequatur.</p><br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi corporis, hic eaque soluta iure nulla expedita ducimus officia amet dolorum modi nisi, necessitatibus minus ipsam consequatur. Beatae totam eos dolore quisquam sunt sit ad dolorem consectetur veritatis. Beatae totam cum corporis consequatur suscipit assumenda velit minus rerum aperiam quae cumque ea quibusdam consectetur voluptatum facere ut itaque, odit quasi autem error incidunt? Dolore, molestiae fugit, quas ratione exercitationem minus vitae mollitia earum porro dignissimos nesciunt officia eius quia, sit consequatur adipisci fugiat laudantium iste eveniet incidunt neque omnis iusto voluptatibus animi! Eius reprehenderit dicta dignissimos obcaecati repudiandae ab consequatur.</p>
    </div>
    `;
  }

    constructor() {}
   }
