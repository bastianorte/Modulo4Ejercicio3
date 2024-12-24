import { Profiler } from "react";
import DoctorCard from "./DoctorCard";
import doctores from '../components/doctores.json';

function ProfilerView() {
const onRenderCallback = (
id, // Nombre del Profiler
phase, // "mount" o "update"
actualDuration // Duración del renderizado

) => {console.log(
`${id} (${phase}) tomó ${actualDuration.toFixed(2)}ms para
renderizar.`
);
};

return (
<div>
<h1>React Profiler</h1>
<Profiler id="ProfilerExample" onRender={onRenderCallback}>
    <DoctorCard doctores={doctores} />
</Profiler>
</div>
);
}

export default ProfilerView;