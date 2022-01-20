function modifyWorker(worker){
    if(worker.dizziness === true){
        const requiredWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredWater;
        worker.dizziness = false;
    }
    return worker
}
console.log(modifyWorker({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
