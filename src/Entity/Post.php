<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=250)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=250)
     */
    private $slug;

    /**
     * @ORM\OneToMany(targetEntity=PostBlock::class, mappedBy="post", orphanRemoval=true)
     */
    private $body;

    public function __construct()
    {
        $this->body = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return Collection|PostBlock[]
     */
    public function getBody(): Collection
    {
        return $this->body;
    }

    public function addBody(PostBlock $body): self
    {
        if (!$this->body->contains($body)) {
            $this->body[] = $body;
            $body->setPost($this);
        }

        return $this;
    }

    public function removeBody(PostBlock $body): self
    {
        if ($this->body->removeElement($body)) {
            // set the owning side to null (unless already changed)
            if ($body->getPost() === $this) {
                $body->setPost(null);
            }
        }

        return $this;
    }
    
}
