<?php

namespace App\Repository;

use App\Entity\Post;
use App\Entity\PostBlock;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Post|null find($id, $lockMode = null, $lockVersion = null)
 * @method Post|null findOneBy(array $criteria, array $orderBy = null)
 * @method Post[]    findAll()
 * @method Post[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    public function findByParams($data=[])
    {
        // vars
        $defaultPerPage = 12;
        $maxPerPage = 50;
        $tags = isset($data['tags']) ? $data['tags'] : [];
        $categories = isset($data['categories']) ? $data['categories'] : [];
        $page = isset($data['page']) ? $data['page'] : 0;
        $perPage = isset($data['perPage']) && $data['perPage'] != 0 ? $data['perPage'] : $defaultPerPage;
        $search= isset($data['search']) ? $data['search'] : '';
        $offset = $page && $perPage ? ($perPage*($page-1)) : 0;
        // validate
        if ($perPage > $maxPerPage) $perPage = $maxPerPage;
        // query
        $qb = $this->createQueryBuilder('posts')
            ->andWhere("posts.hidden='0'")
            ->orderBy('posts.id', 'ASC')
            ->setMaxResults($perPage)
            ->setFirstResult($offset);
        if ($search) {
            var_dump($search);
            $search = '%'.$search.'%';
            $qb->leftJoin("posts.body", "blocks")
                ->andWhere("blocks.text LIKE :search")
                ->orWhere('posts.title LIKE :search')
                ->setParameter('search', $search);
        }
        if ($tags) {
            var_dump($tags);
            $qb->leftJoin("posts.tags", "tags")
                ->andWhere("tags.slug IN(:tags)")
                ->setParameter("tags", array_values($tags));
        }
        if ($categories) {
            var_dump($categories);
            $qb->leftJoin("posts.categories", "categories")
                ->andWhere("categories.slug IN(:categories)")
                ->setParameter("categories", array_values($categories));
        }
        // output
        return $qb->getQuery()->getResult();
    }

    // /**
    //  * @return Post[] Returns an array of Post objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Post
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
