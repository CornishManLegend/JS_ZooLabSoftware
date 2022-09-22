// using ZooLab.Animals;
// using ZooLabLibrary.Animals.Foods;
// using ZooLabLibrary.Animals.Medicines;
//
// namespace ZooLabLibrary.Animals
// {
//     public abstract class Animal
//     {
//
//         public abstract int RequiredSpaceSqFt { get; }
//         public abstract string[] FavouriteFood { get; }
//         public List<FeedTime> FeedTimes { get; } = new List<FeedTime>();
//         public List<int> FeedScheduale { get; private set; } = new List<int>();
//         public virtual bool IsSick { get; set; } = false;
//         public bool IsHungry { get; set; } = false;
//         public int ID { get; private set; }
//
//         protected Animal() {}
//         protected Animal(int iD)
//         {
//             ID = iD;
//         }
//
//         public abstract bool IsFriendlyWith(Animal animal);
//         public virtual void Feed(Food food) { }
//         public void AddScheduale(List<int> hours)
//         {
//             FeedScheduale = hours;
//         }
//         public virtual void Heal(Medicine medicine) { }
//
//     }
// }
//
//
